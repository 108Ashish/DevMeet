"use client"
import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  CalendarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const {  Sider } = Layout;

export default function Sidebar() {
  const router = useRouter();
    const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Sider width={250} theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} title="DevMeet">
     <div className="px-6 mb-8" style={{marginTop:"20px"}}>
          <h1 className="text-2xl font-bold gradient-text">DevMeet</h1>
        </div>
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={["feed"]} title="DevMeet">
        <Menu.Item key="messages" icon={<HomeOutlined />} onClick={() => { router.push("/profile")}}>Profile</Menu.Item> 
        <Menu.Item key="feed" icon={<AppstoreOutlined />} onClick={() => { router.push("/explore")}}>Feed</Menu.Item>
        <Menu.Item key="events" icon={<CalendarOutlined />}>Events</Menu.Item>
        <Menu.Item key="request" icon={<ProfileOutlined />} onClick={() => { router.push("/requests")}}>Requests</Menu.Item>
      </Menu>
    </Sider>
  );
};