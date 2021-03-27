'use strict';
module.exports = (sequelize, DataTypes) => {
  const Korisnik = sequelize.define('Korisnik', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Korisnik.associate = function(models) {
    // associations can be defined here
	  Korisnik.hasMany(models.Dogadjaj, {
      foreignKey: 'inicijator',
      onDelete: 'CASCADE',
    });
	Korisnik.hasMany(models.Promjena, {
      foreignKey: 'prijavio',
      onDelete: 'CASCADE',
    });
	Korisnik.hasMany(models.Promjena, {
      foreignKey: 'odobrio',
      onDelete: 'CASCADE',
    });
	Korisnik.hasMany(models.Promjena, {
      foreignKey: 'izvrsio',
      onDelete: 'CASCADE',
    });
	Korisnik.hasMany(models.HistorijaPromjena, {
      foreignKey: 'napravioIzmjenu',
      onDelete: 'CASCADE',
    });
	Korisnik.belongsTo(models.Uloga, {
      foreignKey: 'ulogaId',
    });
  };
  return Korisnik;
};