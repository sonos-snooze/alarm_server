'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Alarms',
        'spotifySongID',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Alarms',
        'spotifySongName',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Alarms',
        'spotifySongArtist',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Alarms',
        'spotifySongImgUrl',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      )
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Alarms', 'spotifySongID'),
      queryInterface.removeColumn('Alarms', 'spotifySongName'),
      queryInterface.removeColumn('Alarms', 'spotifySongArtist'),
      queryInterface.removeColumn('Alarms', 'spotifySongImgUrl')
    ];
  }
};
