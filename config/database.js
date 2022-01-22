// Connection to DB
const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  "restaurant_full_stack",
  "postgres",
  "J14791g!",
  {
    host: "127.0.0.1",
    dialect: "postgres",
  }
);

