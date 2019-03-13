const db = require('../dbConfig.js');

async function insert(post) {
  await db('posts').insert(post)
  return db('posts');
};

 async function getAll() {
   return db('posts');
};

module.exports = {
  getAll, insert
};