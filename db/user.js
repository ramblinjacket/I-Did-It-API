export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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

  return User;
};
