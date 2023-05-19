const UserController = require('../controller/users');
const express = require('express');

const router = express.Router();

router.get('/all', UserController.findAllUsers);

router.get('/findallgeousers', UserController.findAllGeoUsers); //PMAP05

router.get('/:id', UserController.findById);

router.get('/byusername/:username', UserController.findByUsername);//PMAP05

router.post('/add', UserController.addUser);

router.post('/updateUserLocation', UserController.updateUserLocation);

router.post('/upduserlocation', UserController.updUserLocation);//PMAP05

router.delete('/removebyid/:id', UserController.removeById);//PMAP05


module.exports = router;