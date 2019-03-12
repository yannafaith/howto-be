const express = require('express');
const posts = require('../../database/models/posts-model.js')
const router = express.Router();
const db = require('../../database/dbConfig');

// need to add protected middleware and error checking/handling

/* ========== GET =========== */

router.get('/', async (req, res) => {
    const allPosts = await posts.getAll()
    try {
        res.status(200).json(allPosts)

    } catch {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params || req.body
    try {
       const post = await db('posts')
          .where({ id: id })
          .first();
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : res.status(200).json(post);
    } catch (err) {
       res.status(500).json({ error: 'unable to get post' });
    }
 });

 /* ========== POST =========== */

router.post('/', async (req, res) => {
    const newPost = req.body;
    const allPosts = await posts.insert(newPost)
    try {
        res.status(201).json({
           message: "post created!",
           posts: allPosts
         })

    } catch {
        res.status(500).json(err)
    }
});

/* ========== PUT =========== */

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
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