const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnMore = document.querySelector('.more')
const btnLess = document.querySelector('.less')
const btnFlorest = document.querySelector('#florest')
const btnRain = document.querySelector('#rain')
const btnCoffe = document.querySelector('#coffe')
const btnFire = document.querySelector('#fire')


btnCoffe.addEventListener('click', () => {
  btnCoffe.classList.toggle('active')
  btnFire.classList.remove('active')
  btnFlorest.classList.remove('active')
  btnRain.classList.remove('active')
})

btnFire.addEventListener('click', () => {
  btnFire.classList.toggle('active')
  btnCoffe.classList.remove('active')
  btnFlorest.classList.remove('active')
  btnRain.classList.remove('active')
})

btnFlorest.addEventListener('click', () => {
  btnFlorest.classList.toggle('active')
  btnCoffe.classList.remove('active')
  btnFire.classList.remove('active')
  btnRain.classList.remove('active')
})

btnRain.addEventListener('click', () => {
  btnRain.classList.toggle('active')
  btnCoffe.classList.remove('active')
  btnFire.classList.remove('active')
  btnFlorest.classList.remove('active')
})