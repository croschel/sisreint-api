import Sequelize, { Model } from 'sequelize';

class Treatment extends Model {
  static init(sequelize) {
    super.init(
      {
        mes_referencia: Sequelize.STRING,
        ano_referencia: Sequelize.STRING,
        qtd_cons_marcada: Sequelize.INTEGER,
        qtd_cons_realizada: Sequelize.INTEGER,
        exame_solicitado: Sequelize.INTEGER,
        exame_agendado: Sequelize.INTEGER,
        exame_realizado: Sequelize.INTEGER,
        laudo_solicitado: Sequelize.INTEGER,
        laudo_confeccionado: Sequelize.INTEGER,
        sessao_fisioterapia: Sequelize.INTEGER,
        ultima_apres: Sequelize.STRING,
        prox_apres: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Military, { foreignKey: 'military_id' });
  }
}

export default Treatment;
