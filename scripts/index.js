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
const rainAudio = new Audio ("https://github.com/xH4rdzn/focusTimerv2/blob/4ff12a393c03104c10dd62f4af7f9167895cb8a4/assets/rain.wav?raw=true")
const coffeAudio = new Audio ("https://github.com/xH4rdzn/focusTimerv2/blob/4ff12a393c03104c10dd62f4af7f9167895cb8a4/assets/coffe.wav?raw=true")
const fireAudio = new Audio ("https://github.com/xH4rdzn/focusTimerv2/blob/4ff12a393c03104c10dd62f4af7f9167895cb8a4/assets/fireplace.wav?raw=true")
const florestAudio = new Audio ("https://github.com/xH4rdzn/focusTimerv2/blob/4ff12a393c03104c10dd62f4af7f9167895cb8a4/assets/florest.wav?raw=true")
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


function soundFlorest () {
  florestAudio.play()
}

function soundRain () {
  rainAudio.play()
}

function soundCoffe () {
  coffeAudio.play()
}

function soudFire () {
  fireAudio.play()
}

function soundStopCoffe () {
  coffeAudio.pause()
}

function soundStopFire () {
  fireAudio.pause()
}

function soundStopFlorest () {
  florestAudio.pause()
}

function soundStopRain () {
  rainAudio.pause()
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
  soundStopFire()
  soundStopFlorest()
  soundStopRain()
})

btnRain.addEventListener('click', () => {
  btnRain.classList.toggle('active')
  btnFire.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnFlorest.classList.remove('active')
  soundRain()
  soundStopFire()
  soundStopFlorest()
  soundStopCoffe()
})

btnFlorest.addEventListener('click', () => {
  btnFlorest.classList.toggle('active')
  btnFire.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnRain.classList.remove('active')
  soundFlorest()
  soundStopCoffe()
  soundStopFire()
  soundStopRain()
})

btnFire.addEventListener('click', () => {
  btnFire.classList.toggle('active')
  btnRain.classList.remove('active')
  btnCoffe.classList.remove('active')
  btnFlorest.classList.remove('active')
  soudFire()
  soundStopCoffe()
  soundStopFlorest()
  soundStopRain()
})

