'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('treatments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      qtd_cons_marcada: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_cons_realizada: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exame_solicitado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exame_agendado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exame_realizado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      laudo_solicitado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      laudo_confeccionado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sessao_fisioterapia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ultima_apres: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prox_apres: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('treatments');
  }
};
