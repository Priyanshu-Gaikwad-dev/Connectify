import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputFilds';
import Button from '../components/Buttons';
import ErrorMessage from '../components/ErrorMassage';
import '../Styles/LoginForm.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const canSubmit = username.trim() && password.trim();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!canSubmit) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === 'admin' && password === 'admin') {
        navigate('/dashboard');
      } else {
        setErrorMsg('Invalid credentials');
      }
    }, 1500);
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputField label="Username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <InputField label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
        <Button text="Login" type="submit" disabled={!canSubmit} loading={loading} />
        <ErrorMessage message={errorMsg} />
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
