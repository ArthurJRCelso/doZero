let name = prompt("Digite seu nome:")
let noteOne = Number(prompt("Digite a primeira nota:"))
let noteTwo = Number(prompt("Digite a segunda nota:"))
let noteThree = Number(prompt("Digite a terceira nota:"))

let average = (noteOne + noteTwo + noteThree) / 3

if (average >= 15) {
    alert('Parabéns ' + name + '! Você foi aprovado')
} else if (average >= 11) {
    alert('Estude para a prova de recuperação!')
} else {
    alert('Você foi reprovado!')
}