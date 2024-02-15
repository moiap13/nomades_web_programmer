// Canvas setup
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Constants
const BLOCK_SIZE = 10;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
const GAME_SPEED = 100; // in ms

const LEFT = "left";
const RIGHT = "right";
const UP = "up";
const DOWN = "down";

const SNAKE_COLOR = "green";
const FOOD_COLOR = "red";

// Game variables
let update_direction = true
let score = 0

// Snake class
class Snake {
  #body
  #direction
  constructor(blockSize) {
    this.#body = [
      { x: 50, y: 50 },
      { x: 40, y: 50 },
      { x: 30, y: 50 },
    ];
    this.#direction = RIGHT;
    this.blockSize = blockSize;
  }
  move() {
    let head = this.head
    switch(this.#direction) {
      case LEFT:
        head.x -= this.blockSize
        break;
      case UP:
        head.y -= this.blockSize
        break;
      case RIGHT:
        head.x += this.blockSize
        break;
      case DOWN:
        head.y += this.blockSize
        break;
    }
    this.#body.unshift(head)
    this.#body.pop()
  }
  grow() {
    const lastSegment = this.body[this.#body.length-1]
    this.body.push(lastSegment)
  }
  checkCollision(item) {
    const head = this.head
    return head.x == item.x && head.y == item.y
  }
  checkSelfCollision() {
    for(let i=1; i<this.body.length; i++){
      if(this.checkCollision(this.body[i])){
        return true
      }
    }
    return false
  }
  checkBorderCollision(canvasWidth, canvasHeight) {
    const head = this.head
    return (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight)
  }
  checkGameOver(canvasWidth, canvasHeight) {
    return this.checkBorderCollision(canvasWidth, canvasHeight) || this.checkSelfCollision()
  }
  draw(ctx) {
    ctx.fillStyle = SNAKE_COLOR
    this.#body.forEach(p => {
      ctx.fillRect(p.x, p.y, this.blockSize, this.blockSize)
    })
  }
  setDirection(direction) {
    const oppositeDirections = {
      [LEFT] : RIGHT,
      [UP] : DOWN,
      [RIGHT] : LEFT,
      [DOWN] : UP,
    }
    if(direction != oppositeDirections[this.#direction] && update_direction) {
      this.#direction = direction
    }
  }

  // GETTERS
  get body() {
    return this.#body;
  }
  get head() { // DO NOT CHANGE THIS FUNCTION
    return {...this.#body[0]}
  }
}
// Food class
class Food {
  #x
  #y
  constructor(blockSize, canvasWidth, canvasHeight) {
    this.blockSize = blockSize
    this.makeFoodItem(canvasWidth, canvasHeight)
  }
  draw(ctx) {
    ctx.fillStyle = FOOD_COLOR
    ctx.fillRect(this.#x, this.#y, this.blockSize, this.blockSize)
  }
  makeFoodItem(canvasWidth, canvasHeight) {
    const suggestedPoint = () => { // return a x,y postion randomly choosed in the canvas
      const maxBlocksX = canvasWidth / this.blockSize;
      const maxBlocksY = canvasHeight / this.blockSize;
      const x = Math.floor(Math.random()*maxBlocksX)*this.blockSize;
      const y = Math.floor(Math.random()*maxBlocksY)*this.blockSize;
      return [x, y];
    }
    const isOnSnake = (segment, p) => segment.x == p[0] && segment.y == p[1]
    const onSnake = (segments, p) => segments.some(s => isOnSnake(s, p))

    let p = suggestedPoint()
    while (onSnake(snake.body, p)) {
      p = suggestedPoint()
    }

    this.#x = p[0]
    this.#y = p[1]
  }
  get x() {
    return this.#x
  }
  get y() {
    return this.#y
  }
}
// Snake setup
let snake = new Snake(BLOCK_SIZE);
snake.draw(ctx);

// Food setup
let food = new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT);
food.draw(ctx);
let food2 = new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT);
food2.draw(ctx);
let food3 = new Food(BLOCK_SIZE, GAME_WIDTH, GAME_HEIGHT);
food3.draw(ctx);

// Arrow key input handling
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      snake.setDirection(LEFT)
      break;
    case "ArrowUp":
      snake.setDirection(UP)
      break;
    case "ArrowRight":
      snake.setDirection(RIGHT)
      break;
    case "ArrowDown":
      snake.setDirection(DOWN)
      break;
  }
  update_direction = false
}

// Game loop
const intervalId = setInterval(() => {
  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Move snake
  snake.move()

  // Check for collision with food
  if (snake.checkCollision(food)) {
    snake.grow()
    food.makeFoodItem(GAME_WIDTH, GAME_HEIGHT)
    document.querySelector("#game-score").innerText = (++score).toString()
  }

  // Check for game over
  if(snake.checkGameOver(GAME_WIDTH, GAME_HEIGHT)){
    alert("Game over")
    clearInterval(intervalId)
  }
  
  // Draw snake and food
  snake.draw(ctx)
  food.draw(ctx)
  food2.draw(ctx)
  food3.draw(ctx)

  update_direction = true
}, GAME_SPEED);