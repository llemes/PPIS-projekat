'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrioritetDogadjaja = sequelize.define('PrioritetDogadjaja', {
    naziv: DataTypes.STRING
  }, {});
  PrioritetDogadjaja.associate = function(models) {
    // associations can be defined here
	 PrioritetDogadjaja.hasMany(models.Dogadjaj, {
      foreignKey: 'prioritetId',
      onDelete: 'CASCADE',
    });
  };
  return PrioritetDogadjaja;
};