export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Token: DataTypes.STRING,
    Image: DataTypes.STRING,
  });

  return Users;
};
