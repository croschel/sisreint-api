import Sequelize, { Model } from 'sequelize';

class Military extends Model {
  static init(sequelize) {
    super.init(
      {
        identidade: Sequelize.INTEGER,
        cpf: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        om: Sequelize.STRING,
        posto_grad: Sequelize.STRING,
        arma: Sequelize.STRING,
        qms: Sequelize.STRING,
        qmg_qmp: Sequelize.STRING,
        ex_militar: Sequelize.BOOLEAN,
        data_nascimento: Sequelize.DATE,
        data_praca: Sequelize.DATE,
        situação: Sequelize.STRING,
        tipo_data_publicacao: Sequelize.STRING,
        consequencia: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this,
  }
  static associate(models) {
    this.belongsToMany(models.Treatment, { foreignKey: 'treatment_id' });
  }
}

export default Military
