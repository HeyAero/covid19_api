function getAllPatients() {
  fetch('http://localhost:3000/patient')
    .then((response) => response.json())
    .then(appendPatients)
    .catch(console.warn);
}

function submitPatient(e) {
  e.preventDefault();

  const patientData = {
    name: e.target.name.value,
    age: e.target.age.value,
  };
  console.log(patientData);

  const options = {
    method: 'POST',
    body: JSON.stringify(patientData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('http://localhost:3000/patient', options)
    .then((r) => r.json())
    .then(appendPatient)
    .catch(console.warn);
}

function appendPatients(patient) {
  patient.forEach(appendPatient);
}

function appendPatient(patientData) {
  console.log('TEST', patientData);
  const newLi = document.createElement('li');
  newLi.textContent = `Patient ${patientData.name} aged ${patientData.age} has successfully been vaccinated`;
  const patientList = document.querySelector('ul');
  patientList.append(newLi);
}

module.exports = {
  getAllPatients,
  submitPatient,
  appendPatients,
  appendPatient,
};
