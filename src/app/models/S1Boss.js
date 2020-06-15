import Sequelize, { Model } from 'sequelize';

class S1Boss extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      posto_grad: Sequelize.STRING,
      funcao: Sequelize.STRING,
    },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default S1Boss;
