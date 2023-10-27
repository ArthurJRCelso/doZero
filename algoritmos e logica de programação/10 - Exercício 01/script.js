let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

let sum = numberOne + numberTwo
let subtract = numberOne - numberTwo
let multi = numberOne * numberTwo
let division = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos dois número é: ${sum}`)
alert(`A subtração dos dois números é: ${subtract}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if(restDiv == 0) {
    alert(`A soma dos dois números é par!`)
} else {
    alert(`A soma dos dois números é ímpar!`)
}

if(numberOne == numberTwo) {
    alert(`Os números inseridos são iguais!`)
} else {
    alert(`Os números inseridos são diferentes!`)
}