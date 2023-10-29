const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', returnPressEnter)

// Funções callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2').innerHTML = `Acertou em ${xAttempts} tentativas!`
    }

    if(inputNumber.value == '' || inputNumber.value < 0) {
        alert('Valor inválido!')
        return
    }

    inputNumber.value = ''
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function returnPressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

