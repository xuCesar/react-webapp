'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    intro: DataTypes.STRING,
    content: DataTypes.STRING,
    order: DataTypes.INTEGER,
    viewCount: DataTypes.INTEGER
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};