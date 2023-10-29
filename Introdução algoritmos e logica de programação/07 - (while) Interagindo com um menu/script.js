let menu
let items = []

while(menu != 3) {
    menu = Number(prompt(
        `Olá usuário! Digite a opção desejada:
            
            1. Cadastrar um item na lista
            2. Mostrar itens cadastrados
            3. Sair do programa.
            
            
            `))

            if(menu == 1) {
                let item = prompt('Cadastre um produto:')
                items.push(item)
            
            } else if (menu == 2) {
                if(items.length == 0) {
                    alert('Não há produtos cadastrados!')
                } else {
                    alert(items)
                }
            
            } else {
                alert('Tchau!')
            }
}
