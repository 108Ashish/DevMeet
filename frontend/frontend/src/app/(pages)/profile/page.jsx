"use client"
import { Avatar, Button, Card, Tabs } from 'antd';
import { useState } from 'react';

export default function page()  {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Banner */}
      <div className="w-full h-40 bg-gray-700 flex items-center justify-center">
        <img 
          src="/banner.jpg" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="relative -mt-10 flex flex-col items-center">
        <Avatar size={100} className="border-4 border-gray-900" />
        <h2 className="text-xl font-semibold mt-2">Harshit shrivastava</h2>
        <p className="text-gray-400">@harshit177</p>
        <p className="text-gray-300 text-sm mt-1">Hey there! I'm harshit .</p>

        {/* Follow/Unfollow & Edit Profile Button */}
        <div className="mt-4">
          <Button 
            type={isFollowing ? "default" : "primary"} 
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
          <Button className="ml-2" type="dashed">Edit Profile</Button>
        </div>

        {/* Stats */}
        <div className="flex mt-4 space-x-6">
          <div className="text-center">
            <h3 className="font-bold text-lg">3</h3>
            <p className="text-gray-400">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">5000</h3>
            <p className="text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">13</h3>
            <p className="text-gray-400">Following</p>
          </div>
        </div>
      </div>
  

      {/* Posts Section */}
      <div className="w-full max-w-2xl mt-6">
        <Tabs defaultActiveKey="1"  tabBarStyle={{ color: "white" }}>
          <Tabs.TabPane tab="Posts" key="1" style={{color:"white"}}>
            <Card style={{background:"gray"}}>
              <p>This is a sample post.</p>
            </Card>
            
          </Tabs.TabPane>
          <Tabs.TabPane tab="Followers" key="2" style={{color:"white"}}>
            <p>List of followers</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Following" key="3" style={{color:"white"}}>
            <p>List of following</p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};


