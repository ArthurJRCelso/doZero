let students = [
    {
        name: 'Arthur',
        firstNote: 9,
        secondNote: 11,
        thirdNote: 8,
    },
    {
        name: 'Igor',
        firstNote: 8,
        secondNote: 12,
        thirdNote: 11,
    },
    {
        name: 'Heitor',
        firstNote: 10,
        secondNote: 9,
        thirdNote: 7,
    },
]

function average(note1, note2, note3) {
    let media = ((note1 + note2 + note3) / 3).toFixed(2)
    return media
}

for(let student of students) {
    let mediaIndiv = average(student.firstNote, student.secondNote, student.thirdNote)
    let message = mediaIndiv > 10 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente novamente!`

    alert(`A média do(a) aluno(a) ${student.name} é: ${mediaIndiv}.
    ${message}`)
}