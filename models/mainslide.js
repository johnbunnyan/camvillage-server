'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mainslide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mainslide.init({
    image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'mainslide',
  });
  return mainslide;
};