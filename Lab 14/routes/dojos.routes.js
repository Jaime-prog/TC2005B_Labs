const express = require('express');

const router = express.Router();
const dojosController = require('../controllers/dojos_controller');



router.get('/Dojo', dojosController.Dojo);
router.get('/', dojosController.listar);
router.get('/nuevo', dojosController.get_nuevo);
router.post('/nuevo', dojosController.post_nuevo);

module.exports = router;