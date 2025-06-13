import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LogoutButton.css';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user data)
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="logout-button"
      aria-label="Logout from account"
      type="button"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
