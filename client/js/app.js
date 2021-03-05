

function getAllPatients(){
    fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(appendPatient)
    .catch(console.warn)
    
};

function submitPatient(event){
    event.preventDefault();

    const patientData = {
        name: event.target.name.value,
        age: event.target.name.value
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(catData),
        headers: {
            "Content-Type": "applicaton/json"
        }
    };

    fetch('http://localhost:3000/patients', options)
        .then(response => response.json())
        .then(appendPatient)
        .catch(console.warn)
}

function appendPatient(patients){
    patients.forEach(addPatient);

};

function addPatient(patientData){
    const newLi = document.createElement('li');
    newLi.textContent = `Patient ${patientData.name} aged ${patientData.age} has successfully been vaccinated` 
    const patientList = document.querySelector('ul');
    patientList.append(newLi)
};




module.exports = {
    getAllPatients,
    submitPatient,
    appendPatient,
    addPatient,
}