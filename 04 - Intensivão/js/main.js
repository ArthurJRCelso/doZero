let text = Number(prompt('Digite algo:'))

if(typeof text === 'number') {
    alert('É um número!')
} else {
    alert('Não é um número!')
}

let numberOne = Number(prompt('Digite um número'))
let numberTwo = Number(prompt('Digite outro número:'))

let soma = numberOne % numberTwo

if(soma != 0) {
    alert('A soma dos dois número é ímpar.')
} else {
    alert('A soma dos dois números é par.')
}
