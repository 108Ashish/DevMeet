"use client"
import { useState } from "react"
import { Layout, Input, Avatar, Dropdown, Menu, Button, Badge,Modal,Form,Select } from "antd"
import { BellOutlined, MessageOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons"
import { useRouter } from "next/navigation"
import "../style/modalStyle.css"
import {techStackOptions,Status} from "../components/TechChoices"


const { Header } = Layout
const { Search } = Input

export default function Navbar() {
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
  const router = useRouter()

  const profileMenu = (
    <Menu theme="dark" style={{ width: 150 }}>
      <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => router.push("/profile")}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => router.push("/settings")}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Header
      style={{
        background: "#141414",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        borderBottom:"1px solid rgba(255, 255, 255, 0.417)"
      }}
    >
      
        <div style={{ flex: 1, maxWidth: 400 , display:"flex", justifyContent:"center" ,  alignItems:"center"}}>
        <Search placeholder="Search DevMeet..." style={{ background: "#1f3a5a" }} />
      </div>
      
      

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div>
        <Button type="primary" onClick={showModal}>CreatePost</Button>
        <Modal
      title="Create New Project"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel} className="dark-btn">
          Cancel
        </Button>,
        <Button key="submit" type="primary" /* onClick={form.submit} */ className="dark-btn">
          Create
        </Button>,
      ]}
      className="dark-modal"
    >
      <Form /* form={form} */ /* onFinish={onFinish} */ layout="vertical">
        <Form.Item
          name="title"
          label="Project Title"
          rules={[{ required: true, message: 'Please enter the project title!' }]}
        >
          <Input className="dark-input" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter the project description!' }]}
        >
          <Input.TextArea rows={4} className="dark-input" />
        </Form.Item>
        <Form.Item
          name="techStack"
          label="Tech Stack"
          rules={[{ required: true, message: 'Please enter the tech stack!' }]}
        >
           <Select style={{width:"30rem"}}  mode="multiple"  placeholder="Types" options={techStackOptions} />
        </Form.Item>
        <Form.Item
          name="Status"
          label="Status"
          rules={[{ required: true, message: 'Please enter the Status!' }]}
        >
           <Select style={{width:"30rem"}}   placeholder="Types" options={Status} />
        </Form.Item>
      </Form>
    </Modal>
      </div>
        <Badge count={5} size="small">
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: 20, color: "white" }} />}
            style={{ background: "transparent" }}
          />
        </Badge>

        <Badge count={2} size="small">
          <Button
            type="text"
            icon={<MessageOutlined style={{ fontSize: 20, color: "white" }} />}
            style={{ background: "transparent" }}
          />
        </Badge>

        <Dropdown overlay={profileMenu} trigger={["click"]} placement="bottomRight">
          <Avatar style={{ cursor: "pointer", backgroundColor: "#1890ff" }} icon={<UserOutlined />} />
        </Dropdown>
      </div>
      
      
    </Header>
  )
}

