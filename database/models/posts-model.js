const db = require('../dbConfig.js');

/*
 async function insert(user) {
   return db('users').insert(user);
 }; */

 async function getAll() {
   return db('posts');
};

module.exports = {
  getAll
};