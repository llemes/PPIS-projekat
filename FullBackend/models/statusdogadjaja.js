'use strict';
module.exports = (sequelize, DataTypes) => {
  const StatusDogadjaja = sequelize.define('StatusDogadjaja', {
    status: DataTypes.STRING
  }, {});
  StatusDogadjaja.associate = function(models) {
    // associations can be defined here
	StatusDogadjaja.hasMany(models.HistorijaDogadjaj, {
      foreignKey: 'statusDogadjajId',
      onDelete: 'CASCADE',
    });
  };
  return StatusDogadjaja;
};