'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    department: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    // Employee.belongsTo(models.Problem, {
    //   foreignKey: 'employeeId',
    //   onDelete: 'CASCADE',
    // });
  };
  return Employee;
};