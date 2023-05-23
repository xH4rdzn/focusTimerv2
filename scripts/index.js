// Variables
const btnFlorest = document.querySelector('#florest')
const btnRain = document.querySelector('#rain')
const btnCoffe = document.querySelector('#coffe')
const btnFire = document.querySelector('#fire')
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnMore = document.querySelector('.more')
const btnLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const coffeAudio = new Audio ("../assets/coffe.waw")
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeOut



// Functions

function lessMinutes () {
  let newMinutes = Number(minutesDisplay.textContent) - 5
  minutesDisplay.textContent = Number(newMinutes)

  if (newMinutes < 0) {
    resetTimer()
  }
  return
}

function moreMinutes () {
  let newMinutes = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = newMinutes 
  return 
  }


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetTimer()
      return
    }

    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function soundCoffe () {
  coffeAudio.play()
}


// Elements and Events
btnPlay.addEventListener('click', function() {
  countdown()
})


btnStop.addEventListener('click', function() {
  resetTimer()
})

btnMore.addEventListener('click', function() {
  moreMinutes()
})

btnLess.addEventListener('click', function () {
  lessMinutes()
})

btnCoffe.addEventListener('click', () => {
  btnCoffe.classList.toggle('active')
  btnFire.classList.remove('active')
  btnRain.classList.remove('active')
  btnFlorest.classList.remove('active')
  soundCoffe()
})

btnRain.addEventListener('click', () => {
  btnRain.classList.toggle('active')
  btnFire.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnFlorest.classList.remove('active')
})

btnFlorest.addEventListener('click', () => {
  btnFlorest.classList.toggle('active')
  btnFire.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnRain.classList.remove('active')
})

btnFire.addEventListener('click', () => {
  btnFire.classList.toggle('active')
  btnRain.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnFlorest.classList.remove('active')
})

