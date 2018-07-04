const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('./config.json')[env];

const db = {};

config.define = {
  freezeTableName: true,
};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable],config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const user = sequelize.import('./user');
db[user.name] = user;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
