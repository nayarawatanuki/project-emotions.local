'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('kids', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      treatment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.BLOB,
        //allowNull: true,
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
    await queryInterface.dropTable('kids');
  }
};
