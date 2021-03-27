const express = require('express');
const router = express.Router();


const uposlenikkomitet_controller = require('../controllers/uposlenikkomitet.controller');
//create
router.post('/create', uposlenikkomitet_controller.uposlenikkomitet_create);
//read
router.get('/', uposlenikkomitet_controller.uposlenikkomitet_all);
//read all
router.get('/:id', uposlenikkomitet_controller.uposlenikkomitet_details);
//update
router.put('/:id/update', uposlenikkomitet_controller.uposlenikkomitet_update);
//delete
router.delete('/:id/delete', uposlenikkomitet_controller.uposlenikkomitet_delete);


module.exports = router;