let option
let items = []

while(option != 3) {
    option = Number(prompt(
        `Olá usuário! Digite a opção desejada:
                    
                    1. Cadastrar um item na lista
                    2. Mostrar itens cadastrados
                    3. Sair do programa.
        `))

        switch(option) {
            case 1:
                let item = prompt('Adicione um item à lista:')
                items.push(item)
            break

            case 2:
                if(items.length == 0) {
                    alert('Adicione itens na lista!')
                } else {
                    alert(items)
                }
            break

            case 3:
                alert('Tchau!')
            break

            default:
            alert('Opção inválida! Tente novamente!')
        }
}