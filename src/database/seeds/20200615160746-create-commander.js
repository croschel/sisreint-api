
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('commanders', [{
      name: 'PEDRO CASTELO BRANCO NETTO',
      posto_grad: 'TC',
      funcao: 'Comandante do 2º Batalhão Logístico Leve',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  down: () => { }
};
