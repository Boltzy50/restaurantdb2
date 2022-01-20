"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Bones Restaurant",
        location: "3130 Piedmont Rd NE, Atlanta, GA 30305",
        review: "1,970",
        stars: 4.6,
      },
      {
        name: "South City Kitchen Buckhead",
        location: "3350 Peachtree Rd NE Suite 175, Atlanta, GA 30326",
        review: "1,617",
        stars: 4.5,
      },
      {
        name: "Bacchanalia",
        location:
          "1460 Ellsworth Industrial Blvd NW Suite 1, Atlanta, GA 30318",
        review: "648",
        stars: 4.7,
      },
      {
        name: "Marcel",
        location: "1170 Howell Mill Rd, Atlanta, GA 30318",
        review: "1,054",
        stars: 4.7,
      },
      {
        name: "Trader Vic's",
        location: "255 Courtland St NE, Atlanta, GA 30303",
        review: "575",
        stars: 4.2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
