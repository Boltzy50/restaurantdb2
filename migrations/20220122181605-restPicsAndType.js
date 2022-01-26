"use strict";

const sequelize = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("Restaurants", "typeOfFood", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Restaurants", "picture", {
        type: Sequelize.STRING,
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
