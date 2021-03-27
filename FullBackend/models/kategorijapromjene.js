'use strict';
module.exports = (sequelize, DataTypes) => {
  const KategorijaPromjene = sequelize.define('KategorijaPromjene', {
    nazivKategorije: DataTypes.STRING
  }, {});
  KategorijaPromjene.associate = function(models) {
    // associations can be defined here
	 KategorijaPromjene.hasMany(models.Promjena, {
      foreignKey: 'kategorijaPromjeneId',
      onDelete: 'CASCADE',
    });
  };
  return KategorijaPromjene;
};