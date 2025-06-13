import React from 'react';
import '../Styles/Buttons.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
}) => (
  <button
    className={`btn ${variant} ${size} ${className}`}
    onClick={onClick}
    disabled={disabled || loading}
    type={type}
  >
    {loading && <span className="loading" aria-hidden="true" />}
    {loading ? 'Loading...' : text}
  </button>
);

export default Button;
