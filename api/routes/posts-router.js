const express = require('express');
const posts = require('../../database/models/posts-model.js')
const router = express.Router();

router.get('/', async (req, res) => {
    const allPosts = await posts.getAll()
    try {
        res.status(200).json(allPosts)

    } catch {
        res.status(500).json(err)
    }
});
module.exports = router;