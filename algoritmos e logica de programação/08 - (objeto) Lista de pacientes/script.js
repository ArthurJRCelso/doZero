patients = [
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

let patientsName = []


for(let index = 0; index < patients.length; index++) {
    patientsName[index] = patients[index].name
    alert(`${patientsName[index]} tem ${patients[index].age} anos, pesa ${patients[index].weight}kg e sua altura é de ${patients[index].height}cm`) 
} 


/*
for(let patient of patients) {
    patientsName.push(patient.name)
}

alert(patientsName)
*/
