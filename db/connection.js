// Set up MySQL connection.
import Sequelize from 'sequelize';
import DBConfig from '.\config.json';

const sequelize = new Sequelize('ididit', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// JawsDB
// if (process.env.JAWSDB_URL) {
//   const connection = mysql.createConnection(process.env.JAWSDB_URL);
// } 
// else {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: null,
//     database: 'ididit',
//   });
// }

// Make connection.
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export connection for our ORM to use.
module.exports = connection;

