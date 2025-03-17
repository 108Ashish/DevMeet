"use client";

import { Layout } from "antd";
import Sidebar from "../../components/Sidebar";

import Feed from "../../components/Feed";
const { Content } = Layout;
export default function page() {
  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>


      <Sidebar />

      <Layout style={{ padding: "20px", flex: 1 }}>
      
<Content>  
        
        <Feed />
</Content>
      </Layout>



    </Layout>
  );
}
