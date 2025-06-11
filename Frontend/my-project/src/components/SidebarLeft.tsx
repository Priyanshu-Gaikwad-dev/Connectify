import React from 'react';
import '../Styles/SidebarLeft.css'; // ✅ Use `.css` in lowercase

const SidebarLeft: React.FC = () => {
  return (
    <div className="sidebar-left">
      <div className="profile">
        <img src="https://via.placeholder.com/80" alt="User" />
        <p>@username</p>
      </div>
      <ul>
        <li>Settings</li>
        <li>My Posts</li>
      </ul>
    </div>
  );
};

export default SidebarLeft;