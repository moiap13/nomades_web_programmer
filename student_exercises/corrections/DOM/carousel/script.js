const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
let direction = 1;
images[0].addEventListener('load', () => {
  const slideWidth = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  const buttonClick = e => {
    direction = e.target.id === "prevBtn" ? -1 : 1;
    changeImage()
    interval = addInterval(interval) 
  }

  const changeImage = _ => {
    if(direction === -1 && counter === 0)
      counter = images.length
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter = (counter + direction) % images.length;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  const addInterval = (intervalId) => {
    if (intervalId)
      clearInterval(intervalId) 
    return setInterval(changeImage, 5000)
  }

  let interval = addInterval()

  nextBtn.addEventListener('click', buttonClick);
  prevBtn.addEventListener('click', buttonClick);
})