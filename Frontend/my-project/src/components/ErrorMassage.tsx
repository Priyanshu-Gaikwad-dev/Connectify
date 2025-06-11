import React from 'react';

interface ErrorProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return message ? <p className="error-message">{message}</p> : null;
};

export default ErrorMessage;
