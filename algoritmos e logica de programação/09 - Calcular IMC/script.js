let patients = [
    {
        name: 'Arthur',
        age: 28,
        weight: 90,
        height: 190,
    },
    {
        name: 'Camila',
        age: 23,
        weight: 50,
        height: 165,
    },
    {
        name: 'Heitor',
        age: 14,
        weight: 55,
        height: 165
    }
]

function IMC(weight, height) {
   return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return`
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}

/*----------------------Tipos de funcões-------------------------

const printPatientIMC = function (patient) {

}

const printPatientIMC = (patient) => {

}

*/

