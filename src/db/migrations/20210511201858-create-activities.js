'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emotion: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activities');
  }
};
