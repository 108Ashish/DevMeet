"use client"

import { useState } from "react"
import { Card, Button, Input, Avatar, Space, Divider } from "antd"
import { UserOutlined, PictureOutlined, VideoCameraOutlined, SmileOutlined, SendOutlined } from "@ant-design/icons"

const { TextArea } = Input

export default function CreatePost() {
  const [postContent, setPostContent] = useState("")

  const handlePost = () => {
    if (postContent.trim()) {
      console.log("Posting:", postContent)
      setPostContent("")
    }
  }

  return (
    <Card
      title="Create Post"
      style={{
        marginTop: "20px",
        background: "#1f1f1f",
        color: "white",
        borderRadius: "8px",
        border: "1px solid #303030",
      }}
      headStyle={{
        color: "white",
        borderBottom: "1px solid #303030",
        fontWeight: "bold",
      }}
    >
      <Space align="start" style={{ marginBottom: "16px", width: "100%" }}>
        <Avatar icon={<UserOutlined />} size={40} style={{ backgroundColor: "#1890ff" }} />
        <TextArea
          placeholder="What's on your mind?"
          autoSize={{ minRows: 2, maxRows: 6 }}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          style={{
            width: "100%",
            background: "#2d2d2d",
            borderColor: "#444",
            color: "white",
          }}
        />
      </Space>

      <Divider style={{ margin: "12px 0", borderColor: "#303030" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Space>
          <Button type="text" icon={<PictureOutlined />} style={{ color: "#aaa" }}>
            Photo
          </Button>
          <Button type="text" icon={<VideoCameraOutlined />} style={{ color: "#aaa" }}>
            Video
          </Button>
          <Button type="text" icon={<SmileOutlined />} style={{ color: "#aaa" }}>
            Feeling
          </Button>
        </Space>

        <Button type="primary" icon={<SendOutlined />} onClick={handlePost} disabled={!postContent.trim()}>
          Post
        </Button>
      </div>
    </Card>
  )
}

