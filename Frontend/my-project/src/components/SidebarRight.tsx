import React from 'react';
import LogoutButton from './LogoutButton';
import '../Styles/SidebarRight.css';

const SidebarRight: React.FC = () => (
    <div 
        className="sidebar-right" 
        role="complementary" 
        aria-label="Quick access"
    >
        <LogoutButton />
        <div className="quick-links">
            <p>Quick Links</p>
            {/* Add quick links here */}
        </div>
    </div>
);

export default SidebarRight;
