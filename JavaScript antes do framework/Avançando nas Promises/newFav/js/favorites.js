export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }

    delete(user) {
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()

    }

    update() {
        this.removeAllTr()
        
        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`      
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Deseja remover usuário?')
                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
        
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td colspan="3">
                    <div class="user">
                        <img src="https://github.com/ArthurJRCelso.png" alt="Imagem de Arthur">
                        <a href="https://github.com/ArthurJRCelso" target="_blank">
                            <p>Arthur Rodrigues</p>
                            <span>ArthurJRCelso</span>
                        </a>
                    </div>
                </td>
                <td class="repositories">
                    10
                </td>
                <td class="followers">
                    7
                </td>
                <td class="remove">
                    <button>Remover</button>
                </td>`

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}