const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

// Rota usuarios
route.get('/home/index',  homeController.index);


module.exports = route;
