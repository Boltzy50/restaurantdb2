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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Violet Hoda",
        review:
          "Such a fun night! The steaks were perfectly cooked, we got the mashed potatoes and asparagus for sides, which  complement the steaks nicely. All of the staff was very friendly, Trevor provided us with excellent service!",
        stars: 5,
        reviewsid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ros W",
        review:
          "Great place. I love the authentic steakhouse atmosphere. I was there to celebrate a birthday and the staff was very accommodating",
        stars: 5,
        reviewsid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Peter Robinson",
        review:
          "Staff did an amazing job. They provided efficient service yet all needs were met without having to ask. For was as rumored, fantastic.",
        stars: 5,
        reviewsid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aurora M",
        review:
          "Missed our brunch reservation but had amazing service at the bar, they were able to do substitutions easily. The fried green tomatoes and pimento cheese recommendation was delicious!",
        stars: 5,
        reviewsid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "outlaw gb",
        review:
          "A great place to host a Birthday celebration. The food was great. The service was even better.",
        stars: 4,
        reviewsid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mahdi Shirvin",
        review:
          "Great quality. We sat outside which was lovely. There are not lots of options in the brunch menu but all of them are awesome.",
        stars: 5,
        reviewsid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JennJenn",
        review:
          "Great food! Service was amazing! Will definitely be a regular customer. Love it.  ❤",
        stars: 5,
        reviewsid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Faith M",
        review:
          "We had brunch at South City Kitchen Buckhead last Saturday. The food was delicious. Emmanuel, our waiter, was outstanding and his recommendations were spot on. The Shrimp and Grits entree was so hearty and full of flavor. The restaurant did an excellent job with Covid-19 precautions. We will be returning soon.",
        stars: 5,
        reviewsid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wesley Turner-Harris",
        review:
          "One of the best dining experiences in Atlanta. Every bite is full of flavor. The atmosphere is calm and elegant. The service is attentive and knowledge. This is our second time this year and we will go back again.",
        stars: 5,
        reviewsid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Justine Sealey",
        review:
          "Get in my belly!  I had a wonderful experience here.  The food was delicious and surprisingly filling.  Would 10/10 come back here.  You absolutely get what you paid for and TRUST we PAID and very satisfied.",
        stars: 5,
        reviewsid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ryan Williams",
        review:
          "We had a 4 course dinner here and it was such a terrific experience. A+ food and service.",
        stars: 5,
        reviewsid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joanne Wu",
        review:
          "I loved the experience I had there. The waiter was polite and the food was delicious! I took my mother there for her birthday and she loved the food. Thanks for giving her an amazing experience! :)",
        stars: 5,
        reviewsid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yas M",
        review:
          "If the Michelin guide rated Atlanta restaurants this place would surely have a star. Stunning plates and absolutely delicious. Wonderful attentive service. Easily one of the best restaurants in the city. Just come here",
        stars: 5,
        reviewsid: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Violet Hoda",
        review:
          "Superb customer service to go with just as amazing food! The atmosphere is perfect for a date, special occasion, or just some great times with friends!",
        stars: 5,
        reviewsid: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cornell Miller",
        review:
          "I had a great experience here. The food was absolutely amazing. The ambience is great and so was the customer service. Highly recommended.",
        stars: 5,
        reviewsid: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Conrad Thomas",
        review:
          "A great rustic steak house in west midtown. Great service and excellent food.",
        stars: 5,
        reviewsid: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David Graham",
        review:
          "One of the best meals I've ever had. Le chaude platau is excellent and worth every penny.",
        stars: 5,
        reviewsid: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Brian Nguyen",
        review:
          "Escargot is absolutely sublime.  Marcel reserve aged beef burger is PHENOMENAL. I'm going to sell my house to come back here. Thanks Marcel.",
        stars: 5,
        reviewsid: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Derrick Brown",
        review:
          "Had the sliced pork and Hawaiian rice. Definitely, a great taste for your tastebuds. The drinks are interesting to try and got a little kick to them.. The Mai Tai was a good drink.",
        stars: 4,
        reviewsid: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Justin Wisniewski",
        review:
          "Food and staff was great! You have to enter though the Marriot lobby and take the elevator down to the Lower Level. Try the Mai Tai, it was delicious.",
        stars: 5,
        reviewsid: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John Padgett",
        review:
          "I have been going here for 15 years it's Atlanta's secret little spot great food the best drinks in town and the two best bartenders I know in Atlanta",
        stars: 5,
        reviewsid: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spencer E",
        review:
          "Awesome place! The OG of tiki, great drinks awesome decor! One of the few left in the US food was good ! The host was awesome he even took us to see the all the outside!",
        stars: 5,
        reviewsid: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vicky Jordan",
        review:
          "Service and friendliness is well worth going back for.  Food wasn't great.  Limited menu at the moment. They're still gearing back up. Will visit again. It's my friend's favorite place.",
        stars: 4,
        reviewsid: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gwendolyn Pinero",
        review:
          "Superb. Amazing restaurant and atmosphere. Staff was awesome. Food was great. Beautiful view of the city. Will be back",
        stars: 5,
        reviewsid: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jonah Scholl",
        reveiw:
          "Fine dining with a great view. On a clear day you can see Stone Mountain. The restaurant will validate parking, even if you valet. Don't forget to tip your valet!",
        stars: 5,
        reviewsid: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LaTonya Slaughter",
        review:
          "The service was awesome! The food was to die for...from the appetizer to the main course to the dessert! We will not wait for a 'special occasion' to return!",
        stars: 5,
        reviewsid: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diane Raschke",
        review:
          "This was a very pleasant 1st time dining experience. The view from our table was magnificent and the atmosphere was quiet while not stuffy. Our waitress knew every detail of the 3-5 course menu. Cocktails and wine were excellent. Will dine again.",
        stars: 5,
        reviewsid: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Todd Stephen",
        review:
          "Amazing views.  Get the cheese/charcuterie plate...and ask for some rock salt and honey on the side...you can thank me later.",
        stars: 4,
        reviewsid: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Will Hale",
        review:
          "The flavors of the food popped in my mouth. It was great food. The people there very nice and happy to answer any questions. It's popular and also very busy. Worth the wait though.",
        stars: 5,
        reviewsid: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joshua R",
        reveiw:
          "Wife loved it. Her favorite Mediterranean food ever. Owner is kind, gives free samples, sings and enjoys himself. Great place and the prices are reasonable.",
        stars: 5,
        reviewsid: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vlad Ivanov",
        reveiw:
          "Amazing food and the owner is absolutely the definition of a great man! If back in Atlanta, I most certainly will return.",
        stars: 5,
        reviewsid: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Roey Halevy",
        reveiw:
          "This place definitely stands out with its food, everything tastes incredible. Great portions, amazing price. Truly a unique gem. Kameel makes everyone feel welcome, it’s a lovely experience.",
        stars: 5,
        reviewsid: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ray Caldwell",
        review:
          "First time attending here with family and friends.  Place is clean and organized.  The staff is nice and informative.  I will be returning back alone to stuff my face in private",
        stars: 5,
        reviewsid: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Angel",
        review:
          "Man!! The burger, the tots, the spinach dip, and the southwest egg rolls are amazing! I’m so glad I chose this place to be my last place I eat before I begin my fasting! Incredible!",
        stars: 5,
        reviewsid: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iris Cummings",
        review:
          "Found this place on accident and I will be back. Prices were good, food was good, and drinks were cold. Service seemed a bit slow, even though there were not busy, but the food came out hot and delicious",
        stars: 5,
        reviewsid: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "L Smith",
        reivew:
          "Great little treasure we discovered while walking around Grant Park. Service was great in a very chill environment. Southern tots were fantastic!  Also very tasty were the chicken sliders!  So happy we came across this restaurant!",
        stars: 5,
        reviewsid: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mike Maurine",
        review:
          "We ordered SW egg rolls, the bean burrito and the chicken sliders at lunch. Great little place, fast and friendly service. Our daughter lives in O4W, we will be back.",
        stars: 5,
        reviewsid: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cody",
        review:
          "Great food and atmosphere with a great price. Highly recommend the Death Hash during brunch, it will put you right!",
        stars: 5,
        reviewsid: 8,
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
