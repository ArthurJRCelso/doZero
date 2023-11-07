import * as actions from './actions.js'

const buttonToggle = document.querySelector('.darkLight')
const buttonMusicOnOff = document.querySelector('.musicOnOff')
const buttonPlayPause = document.querySelector('.playPause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const controls = document.querySelector('.buttons')
let timer = {
    minutes: document.querySelector('.minute'),
    seconds: document.querySelector('.second')
}
let clearTimeOutID = null
export let state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    noMusic: true, 
}


buttonPlayPause.addEventListener('click', toggleRunning)
buttonStop.addEventListener('click', stop)
buttonAddTime.addEventListener('click', timeAdd)
buttonRemoveTime.addEventListener('click', timeRemove)


buttonToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

buttonMusicOnOff.addEventListener('click', () => {
    document.documentElement.classList.toggle('music-on')
})

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    updateDisplay()
    registerControls()
}

function countdown() {
    if(!state.isRunning) {
        return
    }

    let minutes = Number(timer.minutes.textContent)
    let seconds = Number(timer.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        stop()
        return
    }

    updateDisplay(minutes, seconds)
    setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    timer.minutes.textContent = String(minutes).padStart(2, "0")
    timer.seconds.textContent = String(seconds).padStart(2, "0")
}

function toggleRunning() {
    state.isRunning = !state.isRunning
    countdown()
}

function stop() {
    state.isRunning = false
    updateDisplay()
}

function timeAdd() {
    let min = state.minutes + 5
    let time = min >= 60? 60 : min
    state.minutes = time
    stop()
}

function timeRemove() {
    let min = state.minutes - 5
    let time = min <= 0? 60 : min
    state.minutes = time
    stop()
}

start(state.minutes, state.seconds)


