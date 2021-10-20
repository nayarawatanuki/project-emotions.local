const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const Kid = require('../models/Kid')
const Task = require('../models/Task')

const connect = new Sequelize(dbConfig);

Kid.init(connect);
Task.init(connect);

Kid.associate(connect.models);
Task.associate(connect.models)

module.exports = connect;