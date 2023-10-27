let option 
let patientName = []
let patientAge = []
let patientWeight = []
let patientHeight = []
let index = 0

while(option != 3) {
    option = Number(prompt(`
     Escolha uma das opções abaixos:

        1. Cadastrar usuário
        2. Ver dados dos usuário
        3. Sair
`))

    if(option == 1) {
        let name = prompt('Qual o nome do paciente?')
        patientName.push(name)
        
        let age = prompt(`Olá ${patientName[index]}, qual a sua idade?`)
        patientAge.push(age)

        let weight = prompt(`${patientName[index]}, precisamos que nos informe seu peso:`)
        patientWeight.push(weight)

        let height = prompt(`${patientName[index]}, agora precisamos da sua altura em cm:`)
        patientHeight.push(height)

        index++
    } 
        else if (option == 2) {
            if(patientName.length == 0) {
                alert('Ainda não possui pacientes cadastrados!')
            } else {
                for(let index = 0; index < patientName.length; index++) {
                    alert(`O paciente ${patientName[index]}, tem ${patientAge[index]}, seu peso é ${patientWeight[index]}, e sua altura é de ${patientHeight[index]}cm`)
                }
            }
        } else if (option == 3) {
            alert('Obrigado!')
        } else {
            alert('Erro! Tente novamente!')
        }
}