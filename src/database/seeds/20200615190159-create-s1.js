
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('s1_bosses', [{
      name: 'KASSIO RODRIGUES STRONTIKA',
      posto_grad: 'Maj',
      funcao: 'Chefe da 1ª Seção',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  down: () => { }
};
