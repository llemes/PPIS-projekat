const express = require('express');
const router = express.Router();


const izvjestaj_controller = require('../controllers/izvjestaj.controller');
//create
router.post('/create', izvjestaj_controller.izvjestaj_create);
//read
router.get('/', izvjestaj_controller.izvjestaj_all);
//read all
router.get('/:id', izvjestaj_controller.izvjestaj_details);
//update
router.put('/:id/update', izvjestaj_controller.izvjestaj_update);
//delete
router.delete('/:id/delete', izvjestaj_controller.izvjestaj_delete);


module.exports = router;