const Kid = require('../models/Kid');
const Activity = require('../models/Activity');

module.exports = {

    async list(req, res) {
        const { kid_id } = req.params;

        const kid = await Kid.findByPk(kid_id, {
            include: { association: 'activities'}
        });

        return res.json(kid.activities);
    },

    async insert(req, res) {
        const { kid_id } = req.params;
        const { emotion, response1, response2, response3, respCorrect } = req.body;
        const { image } = req.file; 

        const kid = await Kid.findByPk(kid_id);
        if(!kid) {
            return res.status(400).json({ error: 'Kid not found'});
        }
        
        const activity = await Activity.create(
            { emotion, response1, response2, response3, respCorrect, image, kid_id }
        );
        return res.json(activity);
    },

    async update(req, res) {
        const { id } = req.params;
        const { type } = req.body;

        console.log('controller update activicty', req.params, req.body);
        try {
            const activity = await Activity.update(
                { type },
                {where: {
                    id: id
                }}
            );
            return res.json(activity);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        console.log('controller delete activity', req.params)
        try {
            const activity = await Activity.destroy({ 
                where: {
                    id: id
                } 
            });
            return res.json(activity);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
    }
}