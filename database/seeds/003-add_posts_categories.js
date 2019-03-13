
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post-categories')
    .then(function () {
      // Inserts seed entries
      return knex('post-categories').insert([
        {
          post_id: 1,
          category_id: 1
        },
        {
          post_id: 2,
          category_id: 2
        },
        {
          post_id: 3,
          category_id: 3
        },
        {
          post_id: 1,
          category_id: 4
        },
      ]);
    });
};
