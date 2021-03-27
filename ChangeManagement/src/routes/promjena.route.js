const express = require('express');
const router = express.Router();


const promjena_controller = require('../controllers/promjena.controller');
//create
router.post('/create', promjena_controller.promjena_create);
//read
router.get('/', promjena_controller.promjena_all);
//read all
router.get('/:id', promjena_controller.promjena_details);
//update
router.put('/:id/update', promjena_controller.promjena_update);
//delete
router.delete('/:id/delete', promjena_controller.promjena_delete);


module.exports = router;