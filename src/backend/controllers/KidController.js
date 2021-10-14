const Kid = require('../models/Kid');

module.exports = {

    async list(req, res) {
        const kids = await Kid.findAll();

        return res.json(kids);
    },

    async insert(req, res) {

        const { originalname: key, filename: photo } = req.file;
        const { treatment, code, name, rate, birth, parent, note } = req.body;

        const kid = await Kid.create(
            { photo, treatment, code, name, rate, birth, parent, note });

        return res.json(kid);
    },

    async update(req, res) {

        const { id } = req.params;
        const { photo, treatment, code, name, rate, birth, parent, note } = req.body;
        
        console.log('controller update kid', req.params, req.body)
        try {
            const kid = await Kid.update(
                { photo, treatment, code, name, rate, birth, parent, note },
                
                { where: {
                        id: id
                }}
            )
    
            return res.json(kid);

        }catch(error){
            console.log(error.message);
            res.json({error: true});
        }
        

    },

    async delete(req, res) {
        const { id } = req.params;

        console.log('controller delete kid', req.params)
        try {
            const kid = await Kid.destroy({ 
                where: {
                    id: id
                } 
            });
    
            return res.json(kid);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
        
    }
}