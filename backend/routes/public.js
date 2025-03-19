const { Router } = require('express');
const postController = require("../controllers/post.js")

const router = Router();


router.post('/getCommentsOfPosts', postController.getCommentsOfPosts)
router.post('/getLikesOfPosts', postController.getLikesOfPosts)
router.post('/getUserProfileSummary', postController.getUserProfileSummary)
router.post('/getUsersPosts', postController.getUsersPosts)
router.post('/getUserFollowers', postController.getUserFollowers)
router.post('/getUserFollowing', postController.getUserFollowing)



module.exports = router;