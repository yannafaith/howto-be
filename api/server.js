const express = require('express');
const server = express();
const helmet = require('helmet');

const users = require('../database-routes/users.js');
// const posts = require('../database-routes/posts.js');

server.use(express.json());
server.use(helmet());

server.use('/api/users', users);
// server.use('/api/posts', posts);

/*
Need to write api/auth/login, api/auth/register, api/users, api/posts routes
*/

server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;
