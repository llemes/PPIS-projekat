'use strict';
module.exports = (sequelize, DataTypes) => {
  const Uloga = sequelize.define('Uloga', {
    naziv: DataTypes.STRING
  }, {});
  Uloga.associate = function(models) {
    // associations can be defined here
	 Uloga.hasMany(models.Korisnik, {
      foreignKey: 'ulogaId',
      onDelete: 'CASCADE',
    });

  };
  return Uloga;
};