'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dogadjajs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dogadjaj: {
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
	  prioritetId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'PrioritetDogadjajas',
			  key: 'id',
			  as: 'prioritet',
		  },
	  },
	  tipId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'TipDogadjajas',
			  key: 'id',
			  as: 'tip',
		  },
	  },
	  inicijator: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Korisniks',
			  key: 'id',
			  as: 'inicijator',
		  },
	  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dogadjajs');
  }
};