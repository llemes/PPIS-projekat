'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistorijaPromjena = sequelize.define('HistorijaPromjena', {
    datumOd: DataTypes.DATE,
    datumDo: DataTypes.DATE
  }, {});
  HistorijaPromjena.associate = function(models) {
    // associations can be defined here
	HistorijaPromjena.belongsTo(models.Promjena, {
      foreignKey: 'promjenaId',
    });
	 HistorijaPromjena.belongsTo(models.StatusPromjene, {
      foreignKey: 'statusPromjeneId',
    });
	 HistorijaPromjena.belongsTo(models.Korisnik, {
      foreignKey: 'napravioIzmjenu',
    });
  };
  return HistorijaPromjena;
};