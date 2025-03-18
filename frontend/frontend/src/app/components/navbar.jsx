"use client"
import { Layout, Input, Avatar, Dropdown, Menu, Button, Badge } from "antd"
import { BellOutlined, MessageOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons"
import { useRouter } from "next/navigation"

const { Header } = Layout
const { Search } = Input

export default function Navbar() {
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
        background: "#001529",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div style={{ flex: 1, maxWidth: 400 , display:"flex", justifyContent:"center" ,  alignItems:"center"}}>
        <Search placeholder="Search DevMeet..." style={{ background: "#1f3a5a" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
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

