const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const users = require('./routes/users-router.js');
const auth = require('./routes/auth-routes.js');
// const posts = require('../database-routes/posts.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', users);
server.use('/api/auth', auth);
// server.use('/api/posts', posts);

/*
Need to write api/auth/login, api/auth/register, api/users, api/posts routes
*/

server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;
