import React, { useState } from 'react';
import PostInputBox from '../components/PostInputBox';
import Feed from '../components/Feed';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import '../styles/DashboardLayout.css'; // ✅ make sure the filename matches

interface Post {
  id: string;
  content: string;
  timestamp: Date;
}

const DashboardLayout: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]); // ✅ better pattern
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar-left">
        <SidebarLeft />
      </aside>

      <main className="feed-container">
        <PostInputBox onSubmit={handleNewPost} />
        <Feed posts={posts} />
      </main>

      <aside className="sidebar-right">
        <SidebarRight />
      </aside>
    </div>
  );
};

export default DashboardLayout;
