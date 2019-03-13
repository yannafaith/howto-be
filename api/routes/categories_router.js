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

router.post('/', async (req, res) => {
    let newCat = req.body;
    await db('categories').insert(newCat);

    newCat = await db('categories').where({category_name: req.body.category_name}).first();

    try {
        res.status(200).json(newCat)
    } catch {
        res.status(500).json(err)
    }
});





module.exports = router;