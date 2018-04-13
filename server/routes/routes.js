const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

// handle POST for Vote
router.post('/post/vote/:postId/:username/:type', (req, res) => controller.incrementVoteOnPost(req, res));

// handle GET for single Post
router.get('/post/:postId', (req, res) => controller.getSinglePost(req, res));

// handle GET for all Posts for home page
router.get('/home/posts', (req, res) => controller.getPosts(req, res));

// handle GET for comments on a given post
router.get('/comments/*', (req, res) => controller.getCommentsForPost(req, res));

//handle POST for comments on either posts or other comments
router.post('/comments/*', (req, res) => controller.postOnAComment(req, res));

module.exports = router;
