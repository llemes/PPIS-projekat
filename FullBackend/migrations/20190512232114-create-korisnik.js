'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Korisniks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
	  ulogaId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Ulogas',
			  key: 'id',
			  as: 'uloga',
		  },
	  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Korisniks');
  }
};