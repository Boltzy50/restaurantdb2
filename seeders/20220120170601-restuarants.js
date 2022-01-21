"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Bones Restaurant",
        location: "3130 Piedmont Rd NE, Atlanta, GA 30305",
        review: "1,970",
        stars: 4.6,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "South City Kitchen Buckhead",
        location: "3350 Peachtree Rd NE Suite 175, Atlanta, GA 30326",
        review: "1,617",
        stars: 4.5,
        price: "$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bacchanalia",
        location:
          "1460 Ellsworth Industrial Blvd NW Suite 1, Atlanta, GA 30318",
        review: "648",
        stars: 4.7,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marcel",
        location: "1170 Howell Mill Rd, Atlanta, GA 30318",
        review: "1,054",
        stars: 4.7,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trader Vic's",
        location: "255 Courtland St NE, Atlanta, GA 30303",
        review: "575",
        stars: 4.2,
        price: "$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nikolai's Roof",
        location: "255 Courtland St NE, Atlanta, GA 30303",
        review: "451",
        stars: 4.4,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aviva by Kameel",
        location:
          "225 Peachtree St NE Inside the Mall of Peachtree Center, Atalnta, GA 30303",
        review: "800",
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Babette's Cafe",
        location: "573 N Highland Ave NE, Atlanta, GA 30307",
        review: "416",
        stars: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
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
