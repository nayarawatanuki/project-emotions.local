const { Model, DataTypes } = require('sequelize');

class Kid extends Model {
    static init(sequelize) {
        super.init({
            photo: DataTypes.BLOB,
            key: DataTypes.STRING,
            size: DataTypes.INTEGER,
            url: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    /*static associate(models) {
        this.belongsToMany(models.Activity, { foreignKey: 'kid_id', through: 'kid_activities', as: 'activities'});
    }*/
}

module.exports = Kid;