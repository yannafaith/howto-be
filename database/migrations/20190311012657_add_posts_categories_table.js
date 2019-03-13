
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post-categories', table => {
        table.increments();
        table.integer('post_id').notNullable().unsigned()
        table.foreign('post_id').references('posts.id');
        table.integer('category_id').notNullable().unsigned().unique();
        table.foreign('category_id').references('categories.id');
    });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post-categories')
};
