import React from 'react';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import Feed from '../components/Feed';
import '../index.css';

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </div>
  );
};

export default DashboardLayout;
