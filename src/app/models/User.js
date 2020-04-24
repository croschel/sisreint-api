import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        posto_grad: Sequelize.STRING,
        email: Sequelize.STRING,
        juridico: Sequelize.BOOLEAN,
        hash_password: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default User;
