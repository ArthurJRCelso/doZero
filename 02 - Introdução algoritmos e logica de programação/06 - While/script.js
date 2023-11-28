let result = Number(prompt('Advinhe o número que estou pensando! Está entre 0 e 10.'))
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while(result != randomNumber) {
    result = Number(prompt('Erro! Tente novamente!'))
    xAttempts++
}

if(xAttempts == 1) {
    alert(`Parabéns! Você acertou em ${xAttempts} tentativa.`)
} else {
    alert('Parabéns! Você acertou em ' + xAttempts +' tentativas.')
}
