const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('./config.json')[env];

const db = {};

config.define = {
  freezeTableName: true,
};

const dbInit = (sequelize) => {
  const users = sequelize.import('./tables/users');
  db[users.name] = users;
  const didits = sequelize.import('./tables/didits');
  db[didits.name] = didits;
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  module.exports = db;
};

if (config.use_env_variable) {
  const sequelize = new Sequelize(process.env[config.use_env_variable], config);
  dbInit(sequelize);
} else {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);
  dbInit(sequelize);
}
