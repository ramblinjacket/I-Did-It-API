export default (sequelize, DataTypes) => {
  const Didits = sequelize.define('Didits', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    comment: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
  });

  return Didits;
};