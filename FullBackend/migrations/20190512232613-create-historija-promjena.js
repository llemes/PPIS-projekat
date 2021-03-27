'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HistorijaPromjenas', {
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
	   promjenaId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Promjenas',
			  key: 'id',
			  as: 'promjena',
		  },
	  },
	  statusPromjeneId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'StatusPromjenes',
			  key: 'id',
			  as: 'statusPromjene',
		  },
	  },
	  napravioIzmjenu: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Korisniks',
			  key: 'id',
			  as: 'napravioIzmjenus',
		  },
	  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HistorijaPromjenas');
  }
};