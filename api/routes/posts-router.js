const express = require('express');
const posts = require('../../database/models/posts-model.js')
const router = express.Router();
const db = require('../../database/dbConfig.js');
const authHelper = require('../../common/auth-helpers.js');

// need to add error checking/handling

/* ========== GET =========== */

// returns all posts and post categories

router.get('/', async (req, res) => {
    const allPosts = await posts.getAll();
    const posts_categories =  await db('post-categories').join('categories', 'post-categories.category_id', '=', 'categories.id');
    try {
        res.status(200).json({allPosts, posts_categories})

    } catch {
        res.status(500).json(err)
    }
});

// returns post and categories associated with post
router.get('/:id', async (req, res) => {
    const { id } = req.params || req.body
    try {
       const post = await db('posts')
          .where({ id: id })
          .first();

         const post_categories =  await db('post-categories').join('categories', 'post-categories.category_id', '=', 'categories.id').where({post_id: id});
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : res.status(200).json({post, post_categories});
    } catch (err) {
       res.status(500).json({ error: 'unable to get post' });
    }
 });

 /* ========== POST =========== */

 // returns created post and all posts 

router.post('/', authHelper.protected, async (req, res) => {
    let newPost = req.body;

    const allPosts = await posts.insert(newPost);
    newPost = await db('posts').where({title: newPost.title}).first();

    try {
        res.status(201).json({
           message: "post created!",
           newPost, allPosts
         })

    } catch {
        res.status(500).json(err)
    }
});

/* ========== PUT =========== */

router.put('/:id', authHelper.protected, async (req, res) => {
    const { id } = req.params
    const changes = req.body;
    try {
       const post = await db('posts')
          .where({ id: id })
          .first();
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : await db('posts')
               .where({ id: id })
               .update(changes);
       res.status(202).json({
          message: `post with id:'${post.id}' has been updated`,
          changes,
       });
    } catch (err) {
       res.status(500).json({ error: 'unable to update the post' });
    }
 });

/* ========== DELETE =========== */

router.delete('/:id', authHelper.protected, async (req, res) => {
    const { id } = req.params;
    try {
         const del_post_categories = await db('post-categories').where({post_id:id}).del()

       const post = await db('posts')
          .where({ id: id })
          .first();
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : await db('posts')
               .where({ id: id })
               .delete();
 
       res.status(202).json({
          message: 'post has been deleted.',
       });
    } catch (err) {
       res.status(500).json({ error: 'Unable to delete post' });
    }
 });


 module.exports = router;