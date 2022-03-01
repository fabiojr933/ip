const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const shellController = require('./src/controllers/ShellController');

// Rota usuarios
route.get('/home/index',  homeController.index);
route.post('/shell', shellController.shell);

module.exports = route;
