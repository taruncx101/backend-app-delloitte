const express = require('express');

const userController = require('../controllers/user')


const router = express.Router();

router.get('/all', userController.getusers);



module.exports = router;
