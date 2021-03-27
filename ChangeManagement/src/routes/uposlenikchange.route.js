const express = require('express');
const router = express.Router();


const uposlenikchange_controller = require('../controllers/uposlenikchange.controller');
//create
router.post('/create', uposlenikchange_controller.uposlenikchange_create);
//read
router.get('/', uposlenikchange_controller.uposlenikchange_all);
//read all
router.get('/:id', uposlenikchange_controller.uposlenikchange_details);
//update
router.put('/:id/update', uposlenikchange_controller.uposlenikchange_update);
//delete
router.delete('/:id/delete', uposlenikchange_controller.uposlenikchange_delete);


module.exports = router;