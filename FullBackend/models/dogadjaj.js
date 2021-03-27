'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dogadjaj = sequelize.define('Dogadjaj', {
    dogadjaj: DataTypes.STRING
  }, {});
  Dogadjaj.associate = function(models) {
    // associations can be defined here
	Dogadjaj.belongsTo(models.PrioritetDogadjaja, {
      foreignKey: 'prioritetId',
    });
	 Dogadjaj.belongsTo(models.TipDogadjaja, {
      foreignKey: 'tipId',
    });
	 Dogadjaj.belongsTo(models.Korisnik, {
      foreignKey: 'inicijator',
    });
	 Dogadjaj.hasMany(models.HistorijaDogadjaj, {
      foreignKey: 'dogadjajId',
      onDelete: 'CASCADE',
    });
  };
  return Dogadjaj;
};