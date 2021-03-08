const patientData = require('../data');

class Patient {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
  }

  static get all() {
    const patients = patientData.map((patient) => new Patient(patient));
    return patients;
  }

  static findById(id) {
    try {
      const patientsData = patientData.filter(
        (patient) => patient.id === id
      )[0];
      const patient = new Patient(patientsData);
      return patient;
    } catch (err) {
      throw new Error('That patient does not exist!');
    }
  }

  static create(patient) {
    const newPatientId = patientData.length + 1;
    const newPatient = new Patient({
      id: newPatientId,
      ...patient,
    });
    patientData.push(newPatient);
    return newPatient;
  }

  destroy() {
    const patient = patientData.filter((patient) => patient.id === this.id)[0];
    patientData.splice(patientData.indexOf(patient), 1);
  }
}

module.exports = Patient;
