import Sequelize, { Model } from 'sequelize';

class Treatment extends Model {
  static init(sequelize) {
    super.init(
      {
        qtd_cons_marcada: Sequelize.INTEGER,
        qtd_cons_realizada: Sequelize.INTEGER,
        exame_solicitado: Sequelize.INTEGER,
        exame_agendado: Sequelize.INTEGER,
        exame_realizado: Sequelize.INTEGER,
        laudo_solicitado: Sequelize.INTEGER,
        laudo_confeccionado: Sequelize.INTEGER,
        sessao_fisioterapia: Sequelize.INTEGER,
        ultima_apres: Sequelize.DATE,
        prox_apres: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Treatment;
