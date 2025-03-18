import { Router } from 'express';
import * as userController from "../controllers/user"



const router = Router();

router.post('/comment-post', userController.commentOnPost)
router.post('/deleteComment-post', userController.deleteComment)
router.post('/likeUnlike-post', userController.likeUnlikePost)
router.post('/create-post', userController.createPost)
router.post('/followUnfolow-user', userController.followUnfollowUser)
router.post('/updateUserProfile', userController.updateUserProfile)
router.post('/getOthersProfile', userController.getOthersProfileSummary)
router.post('/getForYouPosts', userController.getForYouPosts);
router.post('/getExplorePosts', userController.getExplorePosts);
router.post('/getHomePosts', userController.getHomePosts);

export default router;