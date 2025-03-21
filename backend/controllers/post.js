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

        const post = await pclient.post.findUnique({
            where: { id: postId },
            select: { id: true }
        });

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

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
                    }
                }
            },
            skip: (page - 1) * limit,
            take: limit,
        });

        res.status(200).json({ likes });
    } catch (error) {
        console.error('Error in getLikesOfPosts:', error);
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
                updatedAt: true,
                Tech: true,
                Status: true,
                createdAt: true,
                user: { // lowercase 'user' to match Prisma relation
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
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

        // Increment impressions if the field exists in your schema
        

        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching user posts:", error);
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
      where: { followingId: userId }, // ✅ Who is following userId
      select: {
        follower: { // ✅ info about the follower
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
           
          },
        },
      },
      orderBy: { followerId: 'asc' },
      skip: (page - 1) * limit,
      take: limit,
    });

    res.status(200).json({ followers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
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

module.exports = { getCommentsOfPosts, getLikesOfPosts, getRestaurantStartingWith, getUsersStartingWith, getUserProfileSummary, getUsersPosts, getUserFollowers, getUserFollowing };