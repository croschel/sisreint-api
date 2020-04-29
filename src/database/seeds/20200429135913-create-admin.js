const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'users',
    [
      {
        name: "Caique Alvarez Roschel",
        nickname: "roschel",
        posto_grad: "1º Ten",
        email: "croschel000@gmail.com",
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
