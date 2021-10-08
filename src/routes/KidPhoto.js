const express = require('express');
const routes = express.Router();

const KidPhoto = require('../controllers/KidPhotoController');

/*routes.get('/kidPhoto', KidPhoto.list);

routes.post('/insertKidPhoto', multer(multerConfig).single('photo'), (req, res) => {
    const { originalname: photo, size, filename: key } = req.file;
  
    const KidPhoto = require('./models/KidPhoto');

    const photoKid = KidPhoto.create({
      photo,
      size,
      key,
      url: " "
    });
  
    return res.json(photoKid);
});
  
routes.delete('/deletePhoto/:id', KidPhoto.delete);

module.exports = routes;*/