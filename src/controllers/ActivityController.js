const Activity = require('../models/Activity');

module.exports = {

    async list(req, res) {
        const activities = await Activity.findAll();

        return res.json(activities);
    },

    async insert(req, res) {
        const { name, type, emotion } = req.body;

        const activity = await Activity.create(
            { name, type, emotion },
            (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send("Valores inseridos");
                }
            }
        );

        return res.json(activity);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, type, emotion } = req.body;

        console.log('controller update activicty', req.params, req.body);
        try {
            const activity = await Activity.update(
                { name, type, emotion },
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