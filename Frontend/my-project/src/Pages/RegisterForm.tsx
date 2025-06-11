import React, { useState, useEffect } from 'react';
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

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid =
      !!formData.username &&
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email) &&
      !!formData.password &&
      !!formData.confirmPassword &&
      formData.password === formData.confirmPassword;

    setCanSubmit(isFormValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const errors: Partial<FormData> = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.confirmPassword) errors.confirmPassword = 'Confirm your password';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSuccessMsg('Registration successful! Redirecting...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <InputField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} error={formErrors.username} />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={formErrors.email} />
        <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={formErrors.password} />
        <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={formErrors.confirmPassword} />
        <Button text="Register" type="submit" disabled={!canSubmit} />
        <ErrorMessage message={Object.values(formErrors).join(' ') || successMsg} />
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
