import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputFilds';
import ErrorMessage from '../components/ErrorMassage';
import Button from '../components/Buttons';
import '../Styles/RegisterForm.css';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMsg, setSuccessMsg] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    setSuccessMsg('');
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSuccessMsg('Registration successful! Redirecting to login...')
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <InputField label="Username" name="username" type="text" value={formData.username} onChange={handleChange} error={errors.username} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />

        <Button text="Register" type="submit" />

        {Object.keys(errors).length > 0 && (
          <ErrorMessage message={Object.values(errors).join(' ')} />
        )}

        {successMsg && <div className="success-message">{successMsg}</div>}

        <p className="login-link">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  )
};

export default RegisterForm;
