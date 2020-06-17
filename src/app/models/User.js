import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        nickname: Sequelize.STRING,
        posto_grad: Sequelize.STRING,
        email: Sequelize.STRING,
        juridico: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
        hash_password: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.hash_password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.hash_password);
  }
}

export default User;
