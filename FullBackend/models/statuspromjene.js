'use strict';
module.exports = (sequelize, DataTypes) => {
  const StatusPromjene = sequelize.define('StatusPromjene', {
    status: DataTypes.STRING
  }, {});
  StatusPromjene.associate = function(models) {
    // associations can be defined here
	StatusPromjene.hasMany(models.HistorijaPromjena, {
      foreignKey: 'statusPromjeneId',
      onDelete: 'CASCADE',
    });
  };
  return StatusPromjene;
};