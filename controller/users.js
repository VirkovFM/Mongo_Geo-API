const mongoose = require('mongoose');
const User = require('../models/user');

const findAllUsers = (req, res) => {
    User.find().then((users) => {               //la palabra then es una promesa
        // console.log('Users FindAll Succes');
        res.status(200).json(users);
    },
    err => { 
        // console.log('Users FindAll Error');
        err && res.status(500).send(err.message);
    });
};


const findById = (req, res) => {
    console.log(req.params);
    User.findById(req.params.id).then((user) => {
        res.status(200).json(user);
    },
    err => {
        err && res.status(500).send(err.message);
    });
};

const addUser = (req, res) => {
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        latestLatitude : req.body.latestLatitude,
        latestLongitude : req.body.latestLongitude
    });

    user.save().then((usr) => {
        res.status(200).json(usr);
    },
    err => {
        err && res.status(500).send(err.message);
    });
};


const updateUserLocation = (req, res) => {
    console.log(req.body);
    User.updateOne({_id:req.body.id}, 
    {latestLaltitude:req.body.latestLaltitude, 
        latestLongitude: req.body.latestLongitude}).then((usr) =>{
            res.status(200).json(usr);
        },
        err => {
            err && res.status(500).send(err.message);
    });
}

module.exports = { findAllUsers, findById, addUser, updateUserLocation };