import { Card, Avatar, Button, Input, Space } from "antd";
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useRequests } from "../context/request";
const { TextArea } = Input;

export default function Feed() {
  const { addRequest, isRequested } = useRequests();
  const posts = [
    {
      id: "1",
      author: "Harshit Shrivastava",
      location: "New York, USA",
      timestamp: "Thursday, Jun 31, 5:50 PM",
      content: "I'm so glad to share some photos from my recent trip to New York...",
      avatar: "https://i.pravatar.cc/40/img=3",
    },
    {
      id: "2",
      author: "Ashish singh",
      location: "New York, USA",
      timestamp: "Thursday, Jun 31, 5:50 PM",
      content: "I'm so glad to share some photos from my recent trip to New York...",
      avatar: "https://i.pravatar.cc/40/img=3",
    },
    {
      id: "3",
      author: "Divya Tiwari",
      location: "San Francisco, USA",
      timestamp: "Wednesday, Jun 30, 3:20 PM",
      content: "Just finished an amazing workshop on UI/UX design principles...",
      avatar: "https://i.pravatar.cc/40/img=3",
    },
  ];

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      {posts.map((post) => (
        <Card style={{ marginBottom: "20px" }} key={post.id}>
          <Space align="start">
            <Avatar src={post.avatar} />
            <div>
              <strong>{post.author}</strong> <span style={{ color: "gray" }}>is at {post.location}</span>
              <p style={{ color: "gray", fontSize: "12px" }}>{post.timestamp}</p>
            </div>
          </Space>
          <p style={{ marginTop: "20px" }}>{post.content}</p>
          <Space style={{ marginTop: "30px" }}>
            <Button icon={<LikeOutlined />}>Like</Button>
            <Button icon={<CommentOutlined />}>Comment</Button>
            <Button icon={<ShareAltOutlined />} onClick={() => addRequest(post)} disabled={isRequested(post.id)}>Request</Button>
          </Space>
          <TextArea rows={2} placeholder="Write a comment..." style={{ marginTop: "20px" }} />
        </Card>
      ))}
    </div>
  );
}
