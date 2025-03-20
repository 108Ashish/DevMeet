"use client"
import { useState } from "react"
import { Card, Avatar, Button, Input, Space, Typography, Divider,Modal } from "antd"
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from "@ant-design/icons"

const { TextArea } = Input
const { Title, Text } = Typography

export default function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const posts = [
    {
      id: "1",
      author: "Harshit Shrivastava",
      location: "New York, USA",
      timestamp: "Thursday, Jun 31, 5:50 PM",
      content: "I'm so glad to share some photos from my recent trip to New York...",
      avatar: "https://i.pravatar.cc/40?img=3",
      likes: 24,
      comments: 5,
      Status:""
    },
    {
      id: "2",
      author: "Ashish Singh",
      location: "New York, USA",
      timestamp: "Thursday, Jun 31, 5:50 PM",
      content: "I'm so glad to share some photos from my recent trip to New York...",
      avatar: "https://i.pravatar.cc/40?img=4",
      likes: 18,
      comments: 3,

    },
    {
      id: "3",
      author: "Divya Tiwari",
      location: "San Francisco, USA",
      timestamp: "Wednesday, Jun 30, 3:20 PM",
      content: "Just finished an amazing workshop on UI/UX design principles...",
      avatar: "https://i.pravatar.cc/40?img=5",
      likes: 32,
      comments: 7,
    },
    {
      id: "4",
      author: "Divya Tiwari",
      location: "San Francisco, USA",
      timestamp: "Wednesday, Jun 30, 3:20 PM",
      content: "Just finished an amazing workshop on UI/UX design principles...",
      avatar: "https://i.pravatar.cc/40?img=5",
      likes: 32,
      comments: 7,
    },
    {
      id: "5",
      author: "Divya Tiwari",
      location: "San Francisco, USA",
      timestamp: "Wednesday, Jun 30, 3:20 PM",
      content: "Just finished an amazing workshop on UI/UX design principles...",
      avatar: "https://i.pravatar.cc/40?img=5",
      likes: 32,
      comments: 7,
    },
  ]

  const handleRequest = (postId) => {
    console.log("Requesting post:", postId)
  }

  const handleLike = (postId) => {
    console.log("Liking post:", postId)
  }

  const handleComment = (postId) => {
    console.log("Commenting on post:", postId)
  }

  return (
    
    <div style={{ padding: "20px 0" }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            marginBottom: "20px",
            background: "#1f1f1f",
            borderRadius: "8px",
            border: "1px solid #303030",
          }}
        
        >
          <Space align="start">
            <Avatar src={post.avatar} size={40} />
            <div>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                 <div>
                <Text strong style={{ color: "white", fontSize: "16px" }}>
                {post.author}
              </Text>
              <Text style={{ color: "#aaa", marginLeft: "5px" }}>is at {post.location}</Text>
              </div>
              
              <div >
                <Button onClick={showModal} type="primary" >Details</Button>
              </div>
              </div>
             
              
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
              <div>
                <Text style={{ color: "#888", fontSize: "12px" }}>{post.timestamp}</Text>
              </div>

            </div>
          </Space>

          <div style={{ margin: "16px 0", color: "white" }}>{post.content}</div>

          <Divider style={{ margin: "12px 0", borderColor: "#303030" }} />

          <Space size="middle">
            <Button type="text" icon={<LikeOutlined />} onClick={() => handleLike(post.id)} style={{ color: "#aaa" }}>
              Like {post.likes > 0 && `(${post.likes})`}
            </Button>

            <Button
              type="text"
              icon={<CommentOutlined />}
              onClick={() => handleComment(post.id)}
              style={{ color: "#aaa" }}
            >
              Comment {post.comments > 0 && `(${post.comments})`}
            </Button>

            <Button
              type="text"
              icon={<ShareAltOutlined />}
              onClick={() => handleRequest(post.id)}
              style={{ color: "#aaa" }}
            >
              Request
            </Button>
          </Space>

          <TextArea
            rows={2}
            placeholder="Write a comment..."
            style={{
              marginTop: "16px",
              background: "#2d2d2d",
              borderColor: "#444",
              color: "white",
            }}
          />
        </Card>
      ))}
    </div>
  )
}

