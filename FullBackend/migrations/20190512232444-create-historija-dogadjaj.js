'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HistorijaDogadjajs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datumOd: {
        type: Sequelize.DATE
      },
      datumDo: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
	  dogadjajId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			 model: 'Dogadjajs',
			 key: 'id',
			 as: 'dogadjaj',
		  },
	  },
	  statusDogadjajId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'StatusDogadjajas',
			  key: 'id',
			  as: 'statusDogadja',
		  },
	  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HistorijaDogadjajs');
  }
};