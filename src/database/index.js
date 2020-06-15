import Sequelize from 'sequelize';

import User from '../app/models/User';
import Military from '../app/models/Military';
import Treatment from '../app/models/Treatment';
import Commander from '../app/models/Commander';
import S1Boss from '../app/models/S1Boss';

import dbConfig from '../configs/database';

const models = [User, Military, Treatment, Commander, S1Boss];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
      ;
  }
}

export default new Database();
