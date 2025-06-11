import React, { useState } from 'react';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import Feed from '../components/Feed';
import FloatingButton from '../components/FloatingButton';
import NewPostDialog from '../components/NewPostDialog';
import '../Styles/DashboardLayout.css';

const DashboardLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);

  const handleNewPost = (content: string) => {
    setPosts([content, ...posts]);
  };

  return (
    <div className="dashboard-layout">
      <SidebarLeft />
      <Feed posts={posts} />
      <SidebarRight />
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      <NewPostDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewPost}
      />
    </div>
  );
};

export default DashboardLayout;
