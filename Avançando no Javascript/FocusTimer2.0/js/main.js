const buttonToggle = document.querySelector('.darkLight')
const buttonMusicOnOff = document.querySelector('.musicOnOff')
const buttonPlayPause = document.querySelector('.playPause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
let minutes = document.querySelector('.minute')
let seconds = document.querySelector('.second')
let clearTimeOutID = null
const state = {
    min: 25,
    sec: 0,
}

buttonStop.addEventListener('click', reset)

buttonToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

buttonMusicOnOff.addEventListener('click', () => {
    document.documentElement.classList.toggle('music-on')
})

buttonPlayPause.addEventListener('click', countdown)

function countdown() {
    clearTimeout(clearTimeOutID)

    let minute = Number(minutes.textContent)
    let second = Number(seconds.textContent)

    second--

    if(second < 0) {
        second = 59
        minute--
    }

    if(minute < 0) {
        reset()
        return
    }

    updateDisplay(minute, second)

    clearTimeOutID = setTimeout(() => countdown(), 1000)
}

function updateDisplay(minute, second) {
    minute = minute ?? state.min
    second = second ?? state.sec

    minutes.textContent = String(minute).padStart(2, "0")
    seconds.textContent = String(second).padStart(2, "0")
}

function reset() {
    updateDisplay()
}



