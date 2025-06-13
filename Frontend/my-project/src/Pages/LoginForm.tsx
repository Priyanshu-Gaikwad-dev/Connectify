import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputFilds';
import Button from '../components/Buttons';
import ErrorMessage from '../components/ErrorMassage';
import '../Styles/LoginForm.css';

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setErrorMsg('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } catch {
      setErrorMsg('Login failed. Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <InputField
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password
        </Link>

        <Button
          text="Login"
          type="submit"
          disabled={loading}
          loading={loading}
        />

        {errorMsg && <ErrorMessage message={errorMsg} />}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  )
};

export default LoginForm;
