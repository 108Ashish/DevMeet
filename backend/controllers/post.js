const { PrismaClient } = require('@prisma/client');

const pclient = new PrismaClient();

const getCommentsOfPosts = async (req, res) => {
    try {
        const { postId } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const comments = await pclient.comment.findMany({
            where: { postId: postId },
            select: {
                id: true,
                content: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        
                        Type: true,
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        });

        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get likes of a post
const getLikesOfPosts = async (req, res) => {
    try {
        const { postId } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const likes = await pclient.like.findMany({
            where: { postId: postId },
            select: {
                id: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        Type: true,
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        });

        res.status(200).json({ likes });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getRestaurantStartingWith = async (req, res) => {
    try {
        const { restaurant } = req.body;

        const restaurants = await pclient.user.findMany({
            where: {
                username: { startsWith: restaurant },
                Type: 'BUSINESS',
                Restaurant: { isNot: null },
            },
            select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
                avatar: true,
            }
        });

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Search for users starting with a username
const getUsersStartingWith = async (req, res) => {
    try {
        const { username } = req.body;

        const users = await pclient.user.findMany({
            where: {
                username: { startsWith: username }
            },
            select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
            }
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get user profile summary
const getUserProfileSummary = async (req, res) => {
    try {
        const { userId } = req.body;

        const profileData = await pclient.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
                Type: true,
                bio: true,
                banner: true,
                _count: {
                    select: {
                        posts: true,
                        followers: true,
                        following: true,
                    }
                }
            }
        });

        res.status(200).json({ profileData });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get posts of a user
const getUsersPosts = async (req, res) => {
    try {
        const { userId } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const posts = await pclient.post.findMany({
            where: { userId: userId },
            select: {
                id: true,
                title: true,
                description: true,
                pictures: true,
                impressions: true,
                originalPostId: true,
                repostedPosts: true,
                createdAt: true,
                User: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        Type: true,
                    }
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    }
                },
            },
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        });

        await Promise.all(posts.map(async (post) => {
            await pclient.post.update({
                where: { id: post.id },
                data: { impressions: { increment: 1 } }
            });
        }));

        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get followers of a user
const getUserFollowers = async (req, res) => {
    try {
        const { userId } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const followers = await pclient.follows.findMany({
            where: { followerId: userId },
            select: {
                follower: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        Type: true,
                    }
                }
            },
            orderBy: { followerId: 'asc' },
            skip: (page - 1) * limit,
            take: limit,
        });

        res.status(200).json({ followers });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get following users of a user
const getUserFollowing = async (req, res) => {
    try {
        const { userId } = req.body;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const following = await pclient.follows.findMany({
            where: { followingId: userId },
            select: {
                following: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                        Type: true,
                    }
                }
            },
            orderBy: { followingId: 'asc' },
            skip: (page - 1) * limit,
            take: limit,
        });

        res.status(200).json({ following });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// pclient.tech.create({
//     where: {
//         userId: ""
//     },
//     data: {
//         tech: "Node.js"
//     }
// })

module.exports = { getCommentsOfPosts, getLikesOfPosts, getRestaurantStartingWith, getUsersStartingWith, getUserProfileSummary, getUsersPosts, getUserFollowers, getUserFollowing };