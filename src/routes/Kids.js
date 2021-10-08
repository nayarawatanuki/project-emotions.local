const express = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('../config/multer');

const Kid = require('../controllers/KidController');

//FUNCTIONS
routes.get('/listKids', Kid.list);

routes.post('/createdKid', multer(multerConfig).single("file"), (req, res) => {
    
    const { originalname: key, filename: file } = req.file;
    const { treatment, code, name, rate, birth, parent, note } = req.body;
    
    const Kid = require('../models/Kid');

    const kid = Kid.create(
        { file, treatment, code, name, rate, birth, parent, note },
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
    
    return res.json(kid);
    
})

routes.put('/updatedKid/:id', Kid.update);

routes.delete('/deletedKid/:id', Kid.delete);

module.exports = routes;