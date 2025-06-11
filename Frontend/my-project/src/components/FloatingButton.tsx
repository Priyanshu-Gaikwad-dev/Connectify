import '../Styles/FloatingButton.css';
import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => (
  <button className="floating-button" onClick={onClick}>+</button>
);

export default FloatingButton;
