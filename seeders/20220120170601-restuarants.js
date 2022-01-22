"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Restaurants", [
      {
        name: "Bones Restaurant",
        location: "3130 Piedmont Rd NE, Atlanta, GA 30305",
        reviews: "1,970",
        stars: 4.6,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "SteakHouse",
        picture: "/img/Bones-Restaurant.jpg",
      },
      {
        name: "South City Kitchen Buckhead",
        location: "3350 Peachtree Rd NE Suite 175, Atlanta, GA 30326",
        reviews: "1,617",
        stars: 4.5,
        price: "$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Southern Classics",
        picture: "/img/South-City-Kitchen-Buckhead.jpg",
      },
      {
        name: "Bacchanalia",
        location:
          "1460 Ellsworth Industrial Blvd NW Suite 1, Atlanta, GA 30318",
        reviews: "648",
        stars: 4.7,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Season New American",
        picture: "/img/bacchanalia.jpg",
      },
      {
        name: "Marcel",
        location: "1170 Howell Mill Rd, Atlanta, GA 30318",
        reviews: "1,054",
        stars: 4.7,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "SteakHouse",
        picture: "img/marcel.jpg",
      },
      {
        name: "Trader Vic's",
        location: "255 Courtland St NE, Atlanta, GA 30303",
        reviews: "575",
        stars: 4.2,
        price: "$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Pacific Rim",
        picture: "img/trader-vics.jpg",
      },
      {
        name: "Nikolai's Roof",
        location: "255 Courtland St NE, Atlanta, GA 30303",
        reviews: "451",
        stars: 4.4,
        price: "$$$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "French-Russian",
        picture: "img/nikolai's-roof.jpg",
      },
      {
        name: "Aviva by Kameel",
        location:
          "225 Peachtree St NE Inside the Mall of Peachtree Center, Atalnta, GA 30303",
        reviews: "800",
        stars: 5,
        price: "$$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Mediterranean",
        picture: "/img/aviva.jpg",
      },
      {
        name: "Dakota Blue",
        location: "454 Cherokee Ave SE, Atlanta, GA 30312",
        reviews: "502",
        stars: 4.4,
        price: "$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Mexican-Cuban",
        picture: "/img/dakota-blue.jpg",
      },
      {
        name: "So Ba Vietnamese Restuarant",
        location: "560 Gresham Ave SE, Atlanta, GA 30316",
        reviews: "641",
        stars: 4.4,
        price: "$",
        createdAt: new Date(),
        updatedAt: new Date(),
        typeOfFood: "Vietnamese",
        picture: "/img/So-ba.jpg",
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
