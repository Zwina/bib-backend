var express = require('express');
var router = express.Router();

const musiquesControllers = require('../controllers/musiques-controller');

router.get('/', musiquesControllers.getMusiques);

router.get('/:musiqueid', musiquesControllers.getMusiqueById);

router.post('/', musiquesControllers.createMusique);

router.patch('/:musiqueid', musiquesControllers.updateMusique);

router.delete('/:musiqueid', musiquesControllers.deleteMusique);


module.exports = router;
