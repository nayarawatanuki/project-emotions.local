const Kid = require('../models/Kid');

module.exports = {

    async list(req, res) {
        const kids = await Kid.findAll();

        return res.json(kids);
    },

    async login(req, res) {

        const {user, code} = req.body;

        const kid = await Kid.findOne({ where: { user: user, code: code} });
        if (kid === null) {
            console.log('Not found!');
        } else {
            //console.log(kid instanceof Kid); // true
            console.log(kid.id); // 'My Title'
        }

        return res.json(kid.id);
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