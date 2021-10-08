const KidPhoto = require('../models/KidPhoto');

module.exports = {

    async list(req, res) {
        const kidPhoto = await KidPhoto.findAll();

        return res.json(kidPhoto);
    },

    async insert(req, res) {
        const { originalname: photo, size, filename: key } = req.file;
  
        const KidPhoto = require('./models/KidPhoto');

        const kidPhoto = await KidPhoto.create({
            photo,
            size,
            key,
            url: " "
        });
  
        return res.json(kidPhoto);
    },

    async update(req, res) {
        const { id } = req.params;

        const { treatment, code, name, rate, birth, parent, note } = req.body;
        
        console.log('controller update criança', req.params, req.body)
        try {
            const kidPhoto = await KidPhoto.update(
                { treatment, code, name, rate, birth, parent, note },
                
                { where: {
                        id: id
                }}
            )
    
            return res.json(kidPhoto);

        }catch(error){
            console.log(error.message);
            res.json({error: true});
        }
        

    },

    async delete(req, res) {
        const { id } = req.params;

        console.log('controller delete criança', req.params)
        try {
            const kidPhoto = await KidPhoto.destroy({ 
                where: {
                    id: id
                } 
            });
    
            return res.json(kidPhoto);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
        
    }
}