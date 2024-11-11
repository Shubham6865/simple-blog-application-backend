

const express = require("express");

const router = express.Router();


const { createPost, getAllPost } = require('../controllers/PostController')
const { likePost, unLikePost } = require('../controllers/likeController')
const { createComments } = require('../controllers/commentController')

router.get('/posts', getAllPost);
router.post('/posts/create', createPost);
router.post("/comments/create", createComments);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unLikePost);



module.exports = router;