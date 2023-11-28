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
    return ((note1 + note2 + note3) / 3).toFixed(2)
}
function messageAprovaded(student) {
    return `
            A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote, student.thirdNote)}.
            Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
}

function messageDisapproved(student) {
    return `
            A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote, student.thirdNote)}.
            Não foi dessa vez, ${student.name}! Tente novamente!`
}

for(let student of students) {
    let note = average(student.firstNote, student.secondNote, student.thirdNote)
    
    if(note > 10) {
        alert(messageAprovaded(student))
    } else {
        alert(messageDisapproved(student))
    }
}






