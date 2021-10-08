const express = require('express');
const KidController = require('./controllers/KidController');
const ActivityController = require('./controllers/ActivityController');
const KidPhotoController = require('./controllers/KidPhotoController');

const routes = express.Router();

routes.get('/kidPhoto', KidPhotoController.list);
routes.post('/insertKidPhoto', KidPhotoController.insert);

routes.get('/listKids', KidController.list);
routes.post('/createdKid', KidController.insert);
routes.put('/updatedKid/:id', KidController.update);
routes.delete('/deletedKid/:id', KidController.delete);

routes.get('/listActivities', ActivityController.list);
routes.post('/createdActivity', ActivityController.insert);
routes.put('/updatedKid/:id', KidController.update);
routes.delete('/deletedActivity/:id', ActivityController.delete);

module.exports = routes;