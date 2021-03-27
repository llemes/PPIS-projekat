'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Promjenas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      opis: {
        type: Sequelize.STRING
      },
      prihvacena: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
	  prioritetPromjeneId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'PrioritetPromjenes',
			  key: 'id',
			  as: 'prioritetPromjene',
		  },
	  },
	   kategorijaPromjeneId: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'KategorijaPromjenes',
			  key: 'id',
			  as: 'kategorijaPromjene',
		  },
	  },
	    prijavio: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Korisniks',
			  key: 'id',
			  as: 'prijavio',
		  },
	  },
	  odobrio: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Korisniks',
			  key: 'id',
			  as: 'odobrio',
		  },
	  },
	  	  izvrsitelj: {
		  type: Sequelize.INTEGER,
		  onDelete: 'CASCADE',
		  references: {
			  model: 'Korisniks',
			  key: 'id',
			  as: 'izvrsitelj',
		  },
	  },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Promjenas');
  }
};