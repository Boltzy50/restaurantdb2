"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // reviews.belongsTo(models.Restaurants);
      // models.Restaurants.hasMany(reviews);
    }
  }
  reviews.init(
    {
      name: DataTypes.STRING,
      review: DataTypes.STRING,
      stars: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reviews",
    }
  );
  return reviews;
};
