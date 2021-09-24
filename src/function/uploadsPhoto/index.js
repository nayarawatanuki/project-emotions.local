const multer = require('multer');

//fs.readFileSync(__dirname + '../../../public/uploads/')

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../../../public/uploads')
    }, filename: (req, file, cb) => {
      cb(null, Date.now().toString + "-" + file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const format = ['photo/png', 'photo/jpg', 'photo/jpge'].find
    (formatAccept => formatAccept = file.mimetype);

    if(format) {
      return cb(null, true);
    }

    return cb(null, false);
  }
}))