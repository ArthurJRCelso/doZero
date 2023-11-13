export const toggle = document.querySelector('body')

export function toggleScreenHome() {
   toggle.classList.add('home')
   toggle.classList.remove('universe')
   toggle.classList.remove('explorer')
}

export function toggleScreenUniverse() {
    toggle.classList.add('universe')
    toggle.classList.remove('home')
    toggle.classList.remove('explorer')

}

export function toggleScreenExplorer() {
    toggle.classList.add('explorer')
    toggle.classList.remove('home')
    toggle.classList.remove('universe')
}