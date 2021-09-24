const { Model, DataTypes } = require('sequelize');

class Activity extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            type: DataTypes.STRING,
            emotion: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Kid, { foreignKey: 'activity_id', through: 'kid_activities', as: 'kids'});
    }
}

module.exports = Activity;