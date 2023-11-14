// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
            login: 'ArthurJRCelso',
            name: "Arthur Rodrigues",
            public_repos: '10',
            followers: '120000'
            },
            {
            login: 'eugenio-silva',
            name: "Lucas Silva",
            public_repos: '10',
            followers: '120000'
            }
        ]
    }

    delete(user) {
        const filteredEntries = this.entries
            .filter(entry => entry.login !== user.login)
    }
}

// classe que vai criar a visualização e eventos do HTML
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
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
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
                    <td class="user">
                        <img src="https://github.com/ArthurJRCelso.png" alt="Imagem de Arthur">
                        <a href="https://github.com/ArthurJRCelso" target="_blank">
                            <p>Arthur Rodrigues</p>
                            <span>ArthurJRCelso</span>
                        </a>
                    </td>
                    <td class="repositories">
                        10
                    </td>
                    <td class="followers">
                        7
                    </td>
                    <td>
                        <button class="remove">&times;</button>
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