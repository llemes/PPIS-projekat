'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistorijaDogadjaj = sequelize.define('HistorijaDogadjaj', {
    datumOd: DataTypes.DATE,
    datumDo: DataTypes.DATE
  }, {});
  HistorijaDogadjaj.associate = function(models) {
    // associations can be defined here
	HistorijaDogadjaj.belongsTo(models.Dogadjaj, {
      foreignKey: 'dogadjajId',
    });
	 HistorijaDogadjaj.belongsTo(models.StatusDogadjaja, {
      foreignKey: 'statusDogadjajId',
    });
  };
  return HistorijaDogadjaj;
};