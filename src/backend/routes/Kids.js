const express = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('../config/multer');

const Kids = require('../controllers/KidController');

//FUNCTIONS
routes.get('/listKids', Kids.list);

routes.post('/createdKid', multer(multerConfig).single("photo"), (req, res) => {
    
    
    const { location: photo = " "} = req.file;
    const { treatment, code, name, rate, birth, parent, note } = req.body;
    //console.log("test ", req.body)

    const Kid = require('../models/Kid');

    const kid = Kid.create(
        { photo, treatment, code, name, rate, birth, parent, note },
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
                

                //console.log("foto", req.file);
            }
        }
    );
    
    return res.json(kid);
    
})

routes.put('/updatedKid/:id', Kids.update);

routes.delete('/deletedKid/:id', Kids.delete);

module.exports = routes;