const { Model, DataTypes } = require('sequelize');

class Kid extends Model {
    static init(sequelize) {
        super.init({
            file: DataTypes.BLOB,
            treatment: DataTypes.STRING,
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            rate: DataTypes.STRING,
            birth: DataTypes.STRING,
            parent: DataTypes.STRING,
            note: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    /*static associate(models) {
        this.belongsToMany(models.Activity, { foreignKey: 'kid_id', through: 'kid_activities', as: 'activities'});
    }*/
}

module.exports = Kid;