/* 
  Exercice DOM-S2-03 - Chronomètre
  Créez un chronomètre numérique affichant les minutes, secondes et millisecondes, 
  avec • Un bouton « Start »: lance le chronomètre
  • Un bouton « Stop »: arrête le chronomètre
  • Un bouton « Reset » qui remet le chronomètre à l’état initial
  
  Options supplémentaires
  a) Ajoutez un bouton « Temps intermédiaire »; Tous les temps intermédiaires sont également affichés dans la page
*/

const vitesseInterval = 10;
const myApp = document.querySelector('#app');
myApp.innerHTML = `
  <div id="ecran">00:00:00</div>
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
  <button id="ti">TI</button>
  <ul id="resultats"></ul>
`;

// Exemple d'0ajout d'un élément HTML
// const h1 = document.createElement("h1")
// h1.classList.remove("red")
// // on est sur qu'il n'y a plus la classe red
// h1.addEventListener("click", e => {
//   // e.target == h1
//   e.target.classList.toggle("red")
// })
// const h1Text = document.createTextNode("Bonjour Nomades")

// h1.appendChild(h1Text)
// myApp.appendChild(h1)

// for TI implementation
const time = {
  centSeconds: 0,
  secondes: 0,
  minutes: 0
};

const START = document.querySelector("#start")
const STOP = document.querySelector("#stop")
const RESET = document.querySelector("#reset")
const TI = document.querySelector("#ti")
const ECRAN = document.querySelector("#ecran")
const RESULTATS = document.querySelector("#resultats")
let currInterval = 0

STOP.disabled = true
RESET.disabled = true
TI.disabled = true
// falsy / truthy
const displayUnits = nb => nb < 10 ? "0"+nb : nb
const createTimeStr = t => `${displayUnits(t.minutes)}:${displayUnits(t.secondes) }:${t.centSeconds}`;
const displayTime = () => {
  ECRAN.textContent = createTimeStr(time);
}

START.addEventListener("click", e => {
  if(!currInterval){
    currInterval = setInterval(
      () => {
        time.centSeconds++

        if(time.centSeconds === 100){
          time.centSeconds = 0
          time.secondes++
        }

        if(time.secondes === 60){
          time.secondes = 0
          time.minutes++
        }

        displayTime()
      }, 
      vitesseInterval
    )
  }

  START.disabled = true
  STOP.disabled = false
  RESET.disabled = false
  TI.disabled = false
})

STOP.addEventListener("click", function(e){
  clearInterval(currInterval)
  currInterval = 0
  START.disabled = false
  STOP.disabled = true
  TI.disabled = true
})

RESET.addEventListener("click", e => {
  clearInterval(currInterval)
  currInterval = 0 
  time.centSeconds = 0 
  time.secondes = 0 
  time.minutes = 0 
  RESULTATS.innerHTML = ""

  displayTime()

  START.disabled = false
  STOP.disabled = true
  RESET.disabled = true
  TI.disabled = true
})

TI.addEventListener("click", e => {
  const currTime = {
    centSeconds: time.centSeconds,
    secondes: time.secondes,
    minutes: time.minutes,
  }

  const li = document.createElement("li")
  const timeText = document.createTextNode(createTimeStr(currTime))
  li.appendChild(timeText)
  RESULTATS.appendChild(li)
})
