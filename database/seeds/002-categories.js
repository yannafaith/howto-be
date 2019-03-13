
exports.seed = function(knex, Promise) {
  return knex('categories')
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          name: "Programming"
        },
        {
          name: "Gardening"
        },
        {
          name: "Fitness"
        },
        {
          name: "Javascript"
        }
      ]);
    });
};
