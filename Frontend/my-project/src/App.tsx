import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';

const Dashboard: React.FC = () => <div style={{ padding: '50px', fontSize: '24px' }}>🚀 Welcome to Dashboard!</div>;

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
