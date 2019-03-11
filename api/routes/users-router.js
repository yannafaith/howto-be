const express = require('express');
const users = require('../../database/models/users-model.js')
const router = express.Router();

// ========================== GET 

router.get('/', (req, res) => {
    users.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve users.'})
    })
});

// ========================== POST

router.post('/', (req, res) => {
    const newUser = req.body;
    if (newUser.username && newUser.password && newUser.email) {
        users.insert(newUser)
        .then(() => {
            res.status(201).json({newUser})
        })
        .catch(err => {
            res.status(500).json({error: 'unable to create user'})
        })
    } else {
    res.status(422).json({error: 'please provide username, password, and email for the new user.'})
    }
});

module.exports = router;