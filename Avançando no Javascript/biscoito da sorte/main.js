const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('.cookie')
const button = document.querySelector('button')

let phrase = document.querySelector('.phrase p')
let phrasesGod = [
    "Deus é bom o tempo todo",
    "Obrigado meu Deus por mais um dia!",
    "Pai nosso que estais no céu, santificado seja o teu nome!",
    "Ele é o Alfa e o Ômega.",
    "Jesus te ama!",
    "Dedique um tempo a Deus",
    "A volta de Jesus está próxima",
    "Saiba que Jesus está com você o tempo todo!"
]

cookie.addEventListener('click', openCookie)
button.addEventListener('click', btnReset)
document.addEventListener('keydown', keydown)

function openCookie() {
    screens()
    phrases()
}

function phrases() {
    let phrasesDay = phrasesGod.length
    let randomNumber = Math.floor(Math.random() * phrasesDay)
    phrase.innerHTML = phrasesGod[randomNumber]
}

function btnReset() {
    screens()
}

function keydown(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        btnReset()
    } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        openCookie()
    }
}

function screens() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}