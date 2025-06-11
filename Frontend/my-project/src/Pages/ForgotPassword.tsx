import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputFilds';
import Button from '../components/Buttons';
import ErrorMessage from '../components/ErrorMassage';
import '../Styles/ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) {
      setMessage('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setMessage('Password reset link has been sent to your email');
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-card" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <p className="instruction-text">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
        
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage('');
          }}
        />
        
        <Button
          text="Send Reset Link"
          type="submit"
          disabled={!email || loading}
          loading={loading}
        />
        
        <ErrorMessage 
          message={message} 
        />
        
        <p className="back-to-login">
          Remember your password? <Link to="/">Back to Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
