const express = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('../config/multer');

const Activity = require('../controllers/ActivityController');
const Act = require('../models/Activity');
const Kid = require('../models/Kid');

//FUNCTIONS
routes.get('/listActivity', Activity.list);
routes.post('/kids/kid_id/createdActivity', multer(multerConfig).single("image"), (req, res) => {

    const { location: image = " "} = req.file;
    const { emotion, response1, response2, response3, respCorrect, kid_id} = req.body;
    
    const kid = Kid.findByPk(kid_id);
        if(!kid) {
            return res.status(400).json({ error: 'Kid not found'});
        }

    const activity = Act.create(
        { kid_id, image, emotion, response1, response2, response3, respCorrect },
        (err, result) => {
            if (err) {
              console.log(err);
              return res.status(400).json({
                  err: true,
                  message: "erro"
               }) 
            } else {
                if (req.file + req.body) {
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
    
    return res.json(activity);
    
})
routes.put('/updatedActivity/:id', Activity.update);
routes.delete('/deletedActivity/:id', Activity.delete);

module.exports = routes;