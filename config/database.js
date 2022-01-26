// Connection to DB
const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  "restaurant_full_stack",
  "postgres",
  "password",
  {
    host: "127.0.0.1",
    dialect: "postgres",
  }
);

