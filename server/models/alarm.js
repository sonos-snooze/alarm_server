'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alarm = sequelize.define('Alarm', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alarm_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    alarm_on: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Alarm;
};
