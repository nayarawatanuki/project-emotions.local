const express = require('express');
const routes = express.Router();

const Activity = require('../controllers/ActivityController');

//FUNCTIONS
routes.get('/listActivities', Activity.list);
routes.post('/createdActivity', Activity.insert);
routes.put('/updatedActivity/:id', Activity.update);
routes.delete('/deletedActivity/:id', Activity.delete);

module.exports = routes;