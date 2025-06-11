import React from 'react';
import LogoutButton from './LogoutButton';

const SidebarRight: React.FC = () => {
  return (
    <div className="sidebar-right">
      <LogoutButton />
      <div className="quick-links">
        <p>Quick Links</p>
      </div>
    </div>
  );
};

export default SidebarRight;
