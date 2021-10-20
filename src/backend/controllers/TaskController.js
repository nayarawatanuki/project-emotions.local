const Kid = require('../models/Kid');
const Task = require('../models/Task');

module.exports = {

    async list(req, res) {
        const { kid_id } = req.params;

        const kid = await Kid.findByPk(kid_id, {
            include: { association: 'tasks'}
        });

        return res.json(kid.tasks);
    },

    async insert(req, res) {
        const { kid_id } = req.params;
        const { emotion, response1, response2, response3, respCorrect } = req.body;
        const { image } = req.file; 

        const kid = await Kid.findByPk(kid_id);
        if(!kid) {
            return res.status(400).json({ error: 'Kid not found'});
        }
        
        const task = await Task.create(
            { emotion, response1, response2, response3, respCorrect, image, kid_id }
        );
        return res.json(task);
    },

    async update(req, res) {
        const { id } = req.params;
        const { type } = req.body;

        console.log('controller update task', req.params, req.body);
        try {
            const task = await Task.update(
                { type },
                {where: {
                    id: id
                }}
            );
            return res.json(task);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        console.log('controller delete task', req.params)
        try {
            const task = await Task.destroy({ 
                where: {
                    id: id
                } 
            });
            return res.json(task);
        }catch(error){
            console.log(error);
                res.json({error: true});
        }
    }
}