import React from 'react';
import '../Styles/ErrorMassage.css';

interface ErrorProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) =>
  message ? (
    <div 
      className="error-message" 
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  ) : null;

export default ErrorMessage;
