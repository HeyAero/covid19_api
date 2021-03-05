// import data & model
const patientsData = require('../data');
const Patient = require('../models/patient');

describe('Patient Model', () => {
  const testPatient = {
    name: 'Aaron',
    age: 22,
  };

  it('should make an instance of a patient ', () => {
    const patient = new Patient({ id: 10, ...testPatient });

    expect(patient.id).toBe(10);
    expect(patient.name).toBe('Aaron');
    expect(patient.age).toBe(22);
  });

  it('should return all patients', () => {
    const patients = Patient.all;

    expect(patients).toEqual(patientsData);
  });

  it('should return a patient', () => {
    const patient = Patient.findById(1);

    expect(patient).toEqual(patientsData[0]);
  });

  it('should throw an error if no patient', () => {
    function testError() {
      Patient.findById(50);
    }

    expect(testError).toThrowError('That patient does not exist!');
  });

  test('should create a patient', () => {
    const newPatientId = patientsData.length + 1;
    const newPatient = Patient.create(testPatient);

    expect(newPatient).toEqual({ id: newPatientId, ...testPatient });
  });

  test('should delete a patient', () => {
    const patientToRemoveId = patientsData.length;
    const patientToRemove = patientsData[patientToRemoveId - 1];

    patientToRemove.destroy();

    expect(patientToRemove).toEqual({ id: patientToRemoveId, ...testPatient });
    expect(patientsData).not.toContain(patientToRemove);
  });
});
