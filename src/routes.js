//import React from 'react';

const express = require('express');
const KidController = require('./controllers/KidController');
const ActivityController = require('./controllers/ActivityController');

const routes = express.Router();


routes.get('/Kids', KidController.list);
routes.post('/Kid', KidController.insert);
routes.delete('/deletedKid', KidController.delete);

routes.get('/Activities', ActivityController.list);
routes.post('/Activity', ActivityController.insert);

module.exports = routes;