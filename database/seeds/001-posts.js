const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').delete()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          title: "How to sign up for Lambda School",
          body: `${faker.lorem.paragraphs(3)}`,
          likes: 0,
          creator_id: 1
        },
        {
          title: "How to Create a React App",
          body: `${faker.lorem.paragraphs(3)}`,
          likes: 0,
          creator_id: 1
        },
        {
          title: "How to impress the ladies",
          body: `${faker.lorem.paragraphs(3)}`,
          likes: 0,
          creator_id: 1
        },
      ]);
    });
};
