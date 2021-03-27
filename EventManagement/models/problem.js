'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define('Problem', {
    description: DataTypes.STRING,
    solved: DataTypes.BOOLEAN,
    priority: DataTypes.INTEGER,
    initiator: DataTypes.BOOLEAN
  }, {});
  Problem.associate = function(models) {
    // associations can be defined here
    Problem.hasOne(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    // Problem.hasMany(models.Employee, {
    //   foreignKey: 'employeeId',
    //   as: 'employee',
    // });
  };
  return Problem;
};