"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reviews", [
      {
        name: "H J",
        review: "Liked the restaurant. Love the has brown and steak was great",
        stars: 5,
        reviewsid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Harold Mayfield",
        review:
          "Great food! Great service! One of my favorite steak houses.  I love a good lobster bisque and with Bones you can taste the sherry. The baby octopus salad with sherry was incredible. The sherry vinaigrette was light and flavorful. I am very particular about octopus and I can say the octopus here is one of my favorites. The bone in rib-eye was marbled nicely and had lots of flavor. If you haven’t been you must visit.",
        stars: 5,
        reviewsid: 1,
      },
      {
        name: "Violet Hoda",
        review:
          "Such a fun night! The steaks were perfectly cooked, we got the mashed potatoes and asparagus for sides, which  complement the steaks nicely. All of the staff was very friendly, Trevor provided us with excellent service!",
        stars: 5,
        reviewsid: 1,
      },
      {
        name: "Ros W",
        review:
          "Great place. I love the authentic steakhouse atmosphere. I was there to celebrate a birthday and the staff was very accommodating",
        stars: 5,
        reviewsid: 1,
      },
      {
        name: "Peter Robinson",
        review:
          "Staff did an amazing job. They provided efficient service yet all needs were met without having to ask. For was as rumored, fantastic.",
        stars: 5,
        reviewsid: 1,
      },
      {
        name: "Aurora M",
        review:
          "Missed our brunch reservation but had amazing service at the bar, they were able to do substitutions easily. The fried green tomatoes and pimento cheese recommendation was delicious!",
        stars: 5,
        reviewsid: 2,
      },
      {
        name: "outlaw gb",
        review:
          "A great place to host a Birthday celebration. The food was great. The service was even better.",
        stars: 4,
        reviewsid: 2,
      },
      {
        name: "Mahdi Shirvin",
        review:
          "Great quality. We sat outside which was lovely. There are not lots of options in the brunch menu but all of them are awesome.",
        stars: 5,
        reviewsid: 2,
      },
      {
        name: "JennJenn",
        review:
          "Great food! Service was amazing! Will definitely be a regular customer. Love it.  ❤",
        stars: 5,
        reviewsid: 2,
      },
      {
        name: "Faith M",
        review:
          "We had brunch at South City Kitchen Buckhead last Saturday. The food was delicious. Emmanuel, our waiter, was outstanding and his recommendations were spot on. The Shrimp and Grits entree was so hearty and full of flavor. The restaurant did an excellent job with Covid-19 precautions. We will be returning soon.",
        stars: 5,
        reviewsid: 2,
      },
      {
        name: "Wesley Turner-Harris",
        review:
          "One of the best dining experiences in Atlanta. Every bite is full of flavor. The atmosphere is calm and elegant. The service is attentive and knowledge. This is our second time this year and we will go back again.",
        stars: 5,
        reviewsid: 3,
      },
      {
        name: "Justine Sealey",
        review:
          "Get in my belly!  I had a wonderful experience here.  The food was delicious and surprisingly filling.  Would 10/10 come back here.  You absolutely get what you paid for and TRUST we PAID and very satisfied.",
        stars: 5,
        reviewsid: 3,
      },
      {
        name: "Ryan Williams",
        review:
          "We had a 4 course dinner here and it was such a terrific experience. A+ food and service.",
        stars: 5,
        reviewsid: 3,
      },
      {
        name: "Joanne Wu",
        review:
          "I loved the experience I had there. The waiter was polite and the food was delicious! I took my mother there for her birthday and she loved the food. Thanks for giving her an amazing experience! :)",
        stars: 5,
        reviewsid: 3,
      },
      {
        name: "Yas M",
        review:
          "If the Michelin guide rated Atlanta restaurants this place would surely have a star. Stunning plates and absolutely delicious. Wonderful attentive service. Easily one of the best restaurants in the city. Just come here",
        stars: 5,
        reviewsid: 3,
      },
      {
        name: "Violet Hoda",
        review:
          "Superb customer service to go with just as amazing food! The atmosphere is perfect for a date, special occasion, or just some great times with friends!",
        stars: 5,
        reviewsid: 4,
      },
      {
        name: "Cornell Miller",
        review:
          "I had a great experience here. The food was absolutely amazing. The ambience is great and so was the customer service. Highly recommended.",
        stars: 5,
        reviewsid: 4,
      },
      {
        name: "Conrad Thomas",
        review:
          "A great rustic steak house in west midtown. Great service and excellent food.",
        stars: 5,
        reviewsid: 4,
      },
      {
        name: "David Graham",
        review:
          "One of the best meals I've ever had. Le chaude platau is excellent and worth every penny.",
        stars: 5,
        reviewsid: 4,
      },
      {
        name: "Brian Nguyen",
        review:
          "Escargot is absolutely sublime.  Marcel reserve aged beef burger is PHENOMENAL. I'm going to sell my house to come back here. Thanks Marcel.",
        stars: 5,
        reviewsid: 4,
      },
      {
        name: "Derrick Brown",
        review:
          "Had the sliced pork and Hawaiian rice. Definitely, a great taste for your tastebuds. The drinks are interesting to try and got a little kick to them.. The Mai Tai was a good drink.",
        stars: 4,
        reviewsid: 5,
      },
      {
        name: "Justin Wisniewski",
        review:
          "Food and staff was great! You have to enter though the Marriot lobby and take the elevator down to the Lower Level. Try the Mai Tai, it was delicious.",
        stars: 5,
        reviewsid: 5,
      },
      {
        name: "John Padgett",
        review:
          "I have been going here for 15 years it's Atlanta's secret little spot great food the best drinks in town and the two best bartenders I know in Atlanta",
        stars: 5,
        reviewsid: 5,
      },
      {
        name: "Spencer E",
        review:
          "Awesome place! The OG of tiki, great drinks awesome decor! One of the few left in the US food was good ! The host was awesome he even took us to see the all the outside!",
        stars: 5,
        reviewsid: 5,
      },
      {
        name: "Vicky Jordan",
        review:
          "Service and friendliness is well worth going back for.  Food wasn't great.  Limited menu at the moment. They're still gearing back up. Will visit again. It's my friend's favorite place.",
        stars: 4,
        reviewsid: 5,
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
