const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'users',
    [
      {
        name: "Julio Henrique Alves de Oliveira",
        nickname: "julio alves",
        posto_grad: "3º Sgt",
        email: "sti@2blogl.eb.mil.br",
        juridico: true,
        hash_password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
