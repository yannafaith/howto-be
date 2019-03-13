const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const users = require('./routes/users-router.js');
const auth = require('./routes/auth-router.js');
const posts = require('./routes/posts-router.js');
const categories = require('./routes/categories_router.js');
const posts_categories = require('./routes/posts_categories_router.js')

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', users);
server.use('/api/auth', auth);
server.use('/api/posts', posts);
server.use('/api/categories', categories);
server.use('/api/cp', posts_categories);

server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;
