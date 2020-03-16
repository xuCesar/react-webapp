'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
  };
  return Tags;
};