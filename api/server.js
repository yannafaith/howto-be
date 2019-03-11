const express = require('express');
const server = express();

server.get('/api', async (req, res) => {
    res.status(200).json({message: "Running!"});
});

module.exports = server;
