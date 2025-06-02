import { DataTypes } from 'sequelize';

export default sequelize => {
  const Building = sequelize.define('Building', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Building.associate = (db) => { }

  return Building;
};


