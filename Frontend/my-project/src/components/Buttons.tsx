import React from 'react';
import '../Style/Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, loading }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled || loading}>
      {loading ? 'Logging in...' : text}
    </button>
  );
};

export default Button;
