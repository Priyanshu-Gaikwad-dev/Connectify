import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, loading, type = 'button' }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled} type={type}>
      {loading ? 'Loading...' : text}
    </button>
  );
};

export default Button;
