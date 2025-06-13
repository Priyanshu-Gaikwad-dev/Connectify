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
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail) {
      setMessage('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setMessage('A password reset link has been sent to your email.');

    } catch {
      setMessage('An error occurred. Please try again.');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-card">
        <h2>Reset Password</h2>
        <p>Enter your email address and we’ll send you instructions to reset your password.</p>

        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          text="Send Reset Link"
          type="submit"
          disabled={!email || loading}
          loading={loading}
        />

        {message && <ErrorMessage message={message} />}
        {isSuccess && <p className="success-message">{message}</p>}

        <p className="back-to-login">
          Remember your password? <Link to="/">Back to Login</Link>
        </p>
      </form>
    </div>
  )
};

export default ForgotPassword;
