/* 
  Exercice DOM-S2-03 - Chronomètre
  Créez un chronomètre numérique affichant les minutes, secondes et millisecondes, 
  avec • Un bouton « Start »: lance le chronomètre
  • Un bouton « Stop »: arrête le chronomètre
  • Un bouton « Reset » qui remet le chronomètre à l’état initial
  
  Options supplémentaires
  a) Ajoutez un bouton « Temps intermédiaire »; Tous les temps intermédiaires sont également affichés dans la page
*/

const vitesseInterval = 100;
const myApp = document.querySelector('#app');
myApp.innerHTML = `
  <div id="ecran">00:00:00</div>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
  <button id="ti">TI</button>
  <ul id="resultats"></ul>
`;

let intervalID 
const ulTI = document.querySelector("#resultats")

// for TI implementation
const time = {
  millisecondes: 0,
  secondes: 0,
  minutes: 0
};

const formatTime = () => {
  const millisecondesStr = (time.millisecondes > 0 ? time.millisecondes : `000`)
  const secondesStr = (time.secondes >= 10 ? time.secondes : `0${time.secondes}`)
  const minutesStr = (time.minutes >= 10 ? time.minutes : `0${time.minutes}`)

  return `${minutesStr}:${secondesStr}:${millisecondesStr}`
}

const display = () => {
  document.querySelector("#ecran").textContent = formatTime()
}

const resetTime = () => {
  time.millisecondes = 0
  time.secondes = 0
  time.minutes = 0
  display()
}

const startButton = document.querySelector("#start")
startButton.addEventListener("click", () => {
  intervalID = setInterval(() => {
    time.millisecondes += vitesseInterval

    if (time.millisecondes >= 1000){
      time.secondes++
      time.millisecondes = 0
    }

    if (time.secondes >= 60) {
      time.minutes++
      time.secondes = 0
    }
    display()
  }, vitesseInterval) 
})

const stopButton = document.querySelector("#stop")
stopButton.addEventListener("click", () => {
  clearInterval(intervalID)
})

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
  clearInterval(intervalID)
  resetTime()
  ulTI.textContent = ""
})

const tiButton = document.querySelector("#ti")
tiButton.addEventListener("click", () => {
  const tiLi = document.createElement("li")
  tiLi.textContent = formatTime()
  ulTI.appendChild(tiLi)
})

display()