const UserController = require('../controller/users');
const express = require('express');

const router = express.Router();

router.get('/all', UserController.findAllUsers);

router.get('/:id', UserController.findById);

router.post('/add', UserController.addUser);

router.post('/updateUserLocation', UserController.updateUserLocation);

module.exports = router;