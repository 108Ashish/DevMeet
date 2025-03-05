"use client"
import React from "react";
import { Layout, Menu } from "antd";
import {
  MessageOutlined,
  MailOutlined,
  HomeOutlined,
  ProfileOutlined,
  CalendarOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const {  Sider } = Layout;

export default function Sidebar() {
    const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Sider width={250} theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={["feed"]}>
        <Menu.Item key="messages" icon={<ProfileOutlined />}>Profile</Menu.Item>
        <Menu.Item key="feed" icon={<HomeOutlined />}>Feed</Menu.Item>
        <Menu.Item key="events" icon={<CalendarOutlined />}>Events</Menu.Item>
        <Menu.Item key="explore" icon={<AppstoreOutlined />}>Explore</Menu.Item>
      </Menu>
    </Sider>
  );
};


