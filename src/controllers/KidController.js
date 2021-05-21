const Kid = require('../models/Kid');

module.exports = {

    async list(req, res) {
        const kids = await Kid.findAll();

        return res.json(kids);
    },

    async insert(req, res) {
        const { treatment, code, name, rate, birth, parent, note } = req.body;

        const kid = await Kid.create({ treatment, code, name, rate, birth, parent, note });

        return res.json(kid);
    },

    async update(req, res) {
        const { treatment, code, name, rate, birth, parent, note } = req.body;

        const { id } = req.params;

        await Kid.update(
            { treatment, code, name, rate, birth, parent, note }, 
            {
                where: {
                    id: id
                }
            }
        );

    },

    async delete(req, res) {
        const { id } = req.body;

        console.log('controller delete criança', req.body, req.id)

        const kid = await Kid.destroy({ 
            where: {
                id: id
            } 
        });

        return res.json(kid);
    }
}