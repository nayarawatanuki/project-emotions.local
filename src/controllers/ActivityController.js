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
    }
}