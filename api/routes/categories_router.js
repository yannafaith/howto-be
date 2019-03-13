const express = require('express');
const router = express.Router();
const db = require('../../database/dbConfig.js');

router.get('/', async (req, res) => {
    const allCategories = await db('categories');
    try {
        res.status(200).json(allCategories)
    } catch {
        res.status(500).json(err)
    }
});


    // will have to change name to category_name when rollback migrations and seeding. 

router.post('/', async (req, res) => {
    let newCat = req.body;
    await db('categories').insert(newCat);

    newCat = await db('categories').where({name: req.body.name}).first();

    try {
        res.status(200).json(newCat)
    } catch {
        res.status(500).json(err)
    }
});





module.exports = router;