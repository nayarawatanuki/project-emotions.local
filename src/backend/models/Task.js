const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize) {
        super.init({
            emotion: DataTypes.STRING,
            image: DataTypes.STRING,
            response1: DataTypes.STRING,
            response2: DataTypes.STRING,
            response3: DataTypes.STRING,
            respCorrect: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Kid, { foreignKey: 'kid_id', as: 'kid'});
    }
}

module.exports = Task;