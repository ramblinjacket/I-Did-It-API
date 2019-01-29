const Sequelize = require('sequelize');

const config = {
  username: process.env.dbUserName,
  password: process.env.dbPassword,
  database: process.env.dbDatabase,
  host: process.env.dbHost,
  dialect: 'mysql',
};

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
