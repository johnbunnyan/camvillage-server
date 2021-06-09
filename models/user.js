'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.post, {
        through: 'post_user'
      })
    }
  };
  user.init({
    user_id: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    user_image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'user',
  });


  return user;
};