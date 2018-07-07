export default (sequelize, DataTypes) => {
  const Didits = sequelize.define('Didits', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserID: DataTypes.STRING,
    Comment: DataTypes.STRING,
    Image: DataTypes.STRING,
    Type: DataTypes.INTEGER,
  });

  return Didits;
};
