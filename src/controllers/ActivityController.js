const Activity = require('../models/Activity');

module.exports = {

    async list(req, res) {
        const activities = await Activity.findAll();

        return res.json(activities);
    },

    async insert(req, res) {
        const { name, type, emotion } = req.body;

        const activity = await Activity.create({ name, type, emotion });

        return res.json(activity);
    },

    async delete(req, res) {
        const { id } = req.params;

        console.log('controller delete atividade', req.params)
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