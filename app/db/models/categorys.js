'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorys = sequelize.define('Categorys', {
    name: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {});
  Categorys.associate = function(models) {
    // associations can be defined here
  };
  return Categorys;
};