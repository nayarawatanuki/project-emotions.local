//import React from 'react';

const express = require('express');
const KidController = require('./controllers/KidController');
const ActivityController = require('./controllers/ActivityController');

const routes = express.Router();


routes.get('/Kids', KidController.list);
routes.post('/createdKid', KidController.insert);
routes.put('/updatedKid/:id', KidController.update);
routes.delete('/deletedKid/:id', KidController.delete);

routes.get('/Activities', ActivityController.list);
routes.post('/createdActivity', ActivityController.insert);
routes.put('/updatedKid/:id', KidController.update);
routes.delete('/deletedActivity/:id', ActivityController.delete);

module.exports = routes;