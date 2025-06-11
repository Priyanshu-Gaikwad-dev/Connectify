import React, { useState } from 'react';
import InputField from '../components/InputFilds';
import Button from '../components/Buttons';
import ErrorMessage from '../components/ErrorMassage';
import '../Style/LoginForm.css';
import { useNavigate } from 'react-router-dom';

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [loginError, setLoginError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const validate = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!formData.password.trim()) errors.password = 'Password is required';
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setLoginError('');

    setTimeout(() => {
      setLoading(false);
      if (formData.username === 'admin' && formData.password === 'admin') {
        navigate('/dashboard');
      } else {
        setLoginError('Invalid credentials');
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={formErrors.username}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={formErrors.password}
        />
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <Button text="Login" loading={loading} disabled={!formData.username || !formData.password} />
        <ErrorMessage message={loginError} />
      </form>
    </div>
  );
};

export default LoginForm;
