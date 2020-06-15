'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('s1_bosses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: null,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posto_grad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      funcao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('s1_bosses');
  }
};
