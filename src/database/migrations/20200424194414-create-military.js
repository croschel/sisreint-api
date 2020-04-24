'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('militaries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: null,
      },
      identidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      om: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posto_grad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      arma: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qms: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qmg_qmp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ex_militar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_praca: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      situação: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_data_publicacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consequencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'treatments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
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
    return queryInterface.dropTable('militaries');
  }
};