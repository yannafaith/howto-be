
exports.seed = function(knex, Promise) {
  return knex('categories').delete()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          category_name: "Programming"
        },
        {
          category_name: "Gardening"
        },
        {
          category_name: "Fitness"
        },
        {
          category_name: "Javascript"
        }
      ]);
    });
};
