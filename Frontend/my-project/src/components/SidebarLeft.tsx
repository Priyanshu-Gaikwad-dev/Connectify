import React from 'react';
import '../Styles/SidebarLeft.css';

const SidebarLeft: React.FC = () => (
    <div className="sidebar-left" role="navigation" aria-label="Main navigation">
        <div className="profile">
            <img 
                src="https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" 
                alt="User profile"
                loading="lazy"
            />
            <p>@username</p>
        </div>
        <ul>
            <li tabIndex={0} role="button">
                Settings
            </li>
            <li tabIndex={0} role="button">
                My Posts
            </li>
        </ul>
    </div>
);

export default SidebarLeft;
