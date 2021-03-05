const express = require('express');
const router = express.Router();

const Patient = require('../models/patient');

router.get('/', (req, res) => {
  const patientData = Patient.all;
  res.send(patientData);
});

router.get('/:id', (req, res) => {
  try {
    console.log(`ID: ${req.params.id}`);
    const patientId = parseInt(req.params.id);
    const selectedPaitent = Patient.findById(patientId);
    res.send(selectedPaitent);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post('/', (req, res) => {
  const data = req.body;
  const newPatient = Patient.create(data);
  res.status(201).send(newPatient);
});

router.delete('/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const patientToDestroy = Patient.findById(patientId);
  patientToDestroy.destroy();
  res.status(204).send();
});

module.exports = router;
