
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', table => {
        table.increments();
        table.string('title', 255).notNullable();
        table.text('body', 2000).notNullable();
        table.integer('likes');
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
