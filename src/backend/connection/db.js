const sequelize = require("sequelize")

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '7797',
    database: 'emotions',
    define: {
        timezone: 'UTC-03:00',
        timestamps: true,
    },
}