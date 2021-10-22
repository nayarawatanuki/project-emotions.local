const express = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('../config/multer');

const TaskController = require('../controllers/TaskController');
const Task = require('../models/Task');
const Kid = require('../models/Kid');

//FUNCTIONS
routes.get('/:kid_name/tasks/taskListOne/:task_id', TaskController.taskListOne);
routes.get('/tasks/:kid_id/:kid_name/listTasks', TaskController.list);
routes.post('/kids/:kid_id/createdTask', multer(multerConfig).single("image"), (req, res) => {

    const { location: image = " "} = req.file;
    const { emotion, response1, response2, response3, respCorrect, kid_id} = req.body;
    
    const kid = Kid.findByPk(kid_id);
        if(!kid) {
            return res.status(400).json({ error: 'Kid not found'});
        }

    const task = Task.create(
        { kid_id, emotion, response1, response2, response3, respCorrect, image },
        (err, result) => {
            if (err) {
              console.log(err);
              return res.status(400).json({
                  err: true,
                  message: "erro"
               }) 
            } else {
                if (req.body + req.file) {
                    return res.json({
                        err: false,
                        message: "cadastrado com sucesso."
                    });
                }

                res.send("Valores inseridos");
                

                return console.log(req.file);
            }
        }
    );
    
    return res.json(task);
    
})
routes.put('/updatedTask/:id', TaskController.update);
routes.delete('/deletedTask/:id', TaskController.delete);

module.exports = routes;