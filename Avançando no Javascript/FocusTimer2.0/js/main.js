const buttonToggle = document.querySelector('.darkLight')
const buttonMusicOnOff = document.querySelector('.musicOnOff')
const buttonPlayPause = document.querySelector('.playPause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const controls = document.querySelector('.buttons')
let clearTimeOutID = null
let state = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    noMusic: true, 
}

buttonToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

function registerControls() {
    controls.addEventListener('click', (event) => {
       const action = event.target.dataset.action
    })
}

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    registerControls()
}


start(0, 6)


