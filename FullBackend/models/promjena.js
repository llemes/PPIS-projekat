'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promjena = sequelize.define('Promjena', {
    opis: DataTypes.STRING,
    prihvacena: DataTypes.BOOLEAN
  }, {});
  Promjena.associate = function(models) {
    // associations can be defined here
	Promjena.belongsTo(models.PrioritetPromjene, {
      foreignKey: 'prioritetPromjeneId',
    });
	 Promjena.belongsTo(models.KategorijaPromjene, {
      foreignKey: 'kategorijaPromjeneId',
    });
	 Promjena.belongsTo(models.Korisnik, {
      foreignKey: 'prijavio',
    });
	Promjena.belongsTo(models.Korisnik, {
      foreignKey: 'izvrsitelj',
    });
	Promjena.belongsTo(models.Korisnik, {
      foreignKey: 'odobrio',
    });
	 Promjena.hasMany(models.HistorijaPromjena, {
      foreignKey: 'promjenaId',
      onDelete: 'CASCADE',
    });

  };
  return Promjena;
};