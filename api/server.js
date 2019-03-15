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

const allowedOrigins = ['http://localhost:3000', 'https://howto-frontend.netlify.com'];


server.use(
  cors({
    origin: ['http://localhost:3000', 'https://howto-frontend.netlify.com'],
    credentials: true,
  }),
);


/*
server.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
*/

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


server.use('/api/users', users);
server.use('/api/auth', auth);
server.use('/api/posts', posts);
server.use('/api/categories', categories);
server.use('/api/cp', posts_categories);

server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;
