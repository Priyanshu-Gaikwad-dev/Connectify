import '../Styles/LogoutButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return <button onClick={handleLogout} className="logout-button">Logout</button>;
};

export default LogoutButton;