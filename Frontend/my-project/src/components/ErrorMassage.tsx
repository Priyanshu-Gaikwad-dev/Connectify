import React from 'react';
import '../Style/ErrorMassage.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? <p className="error-message">{message}</p> : null;
};

export default ErrorMessage;
