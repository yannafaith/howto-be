const express = require('express');
const router = express.Router();
const db = require('../../database/dbConfig.js');
const authHelper = require('../../common/auth-helpers.js');

// need to make unable to add duplicate categories
// need an update 
// need to seed a user with id 1


 /* POSTS_CATEGORIES */

 router.get('/', async (req, res) => {
    const allData = await db('post-categories')
    try {
        res.status(200).json(allData)
    } catch {
        res.status(500).json(err)
    }
 });

// returns all posts with same category 
 router.get('/:id', async (req, res) => {
    const {id} = req.params;

    const category = await db('categories').where({id:id});

    const posts = await db('post-categories').join('posts', 'post-categories.post_id', '=', 'posts.id' ).where({category_id: id})

    try {
        res.status(200).json({category, posts})
    } catch {
        res.status(500).json(err)
    }
 });


// adds category to post, needs post_id and category_id, returns target post and associated categories

 router.post('/', authHelper.protected, async (req, res) => {
    const addition = await db('post-categories').insert(req.body);

    const category_added = await db('categories').where({id: req.body.category_id});

    let posts_categories = await db('post-categories').where({post_id: req.body.post_id}).select("post_id", "category_id");

    posts_categories = await db('post-categories').join('categories', 'post-categories.category_id', '=', 'categories.id');

    const target_post = await db('posts').where({id: req.body.post_id})

    // will have to change name to category_name when rollback migrations and seeding. 

    try {
        res.status(200).json({message: `${category_added[0].category_name} category has been added to post with title: ${target_post[0].title}. `, posts_categories, target_post})
    } catch {
        res.status(500).json(err)
    }
});
 
 
 
 module.exports = router;