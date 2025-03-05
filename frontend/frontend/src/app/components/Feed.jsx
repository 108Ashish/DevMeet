"use client"
import { Card, Avatar, Button, Input, Space } from "antd";
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Post = () => (
  <Card style={{ marginBottom: "20px" }}>
    <Space align="start">
      <Avatar src="https://i.pravatar.cc/40/img=3" />
      <div>
        <strong>Harshit shrivastava</strong> <span style={{ color: "gray" }}>is at New York, USA</span>
        <p style={{ color: "gray", fontSize: "12px" }}>Thursday, Jun 31, 5:50 PM</p>
      </div>
    </Space>
    <p style={{ marginTop: "20px" }}>I'm so glad to share some photos from my recent trip to New York...</p>
    
    <Space style={{ marginTop: "30px" }}>
      <Button icon={<LikeOutlined />}>Like</Button>
      <Button icon={<CommentOutlined />}>Comment</Button>
      <Button icon={<ShareAltOutlined />}>Request</Button>
    </Space>
    <TextArea rows={2} placeholder="Write a comment..." style={{ marginTop: "20px" }} />
  </Card>
);

export default function Feed() {
  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
