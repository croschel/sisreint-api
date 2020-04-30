import Sequelize, { Model } from 'sequelize';

class Military extends Model {
  static init(sequelize) {
    super.init(
      {
        identidade: Sequelize.STRING,
        cpf: Sequelize.STRING,
        nome: Sequelize.STRING,
        om: Sequelize.STRING,
        posto_grad: Sequelize.STRING,
        arma: Sequelize.STRING,
        ex_militar: Sequelize.BOOLEAN,
        data_nascimento: Sequelize.STRING,
        data_praca: Sequelize.STRING,
        historico: Sequelize.STRING,
        processo: Sequelize.INTEGER,
        situacao: Sequelize.STRING,
        tipo_data_publicacao: Sequelize.STRING,
        consequencia: Sequelize.STRING,
      },
      {
        sequelize
      },
    );
    return this;
  }

}

export default Military;
