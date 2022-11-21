const express = require('express');
const cors = require('cors');
const server = express();
const { TechnologiesRoutes } = require('../routes');

//? middlewares
server.use(express.json());
server.use(express.static(__dirname + '/../public'));
server.use(cors());

//$ Routes
server.use('/api', TechnologiesRoutes);

module.exports = server;
