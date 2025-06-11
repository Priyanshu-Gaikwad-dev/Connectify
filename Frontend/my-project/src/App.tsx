import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/LoginForm';

const Dashboard: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
    🎉 Welcome to the Dashboard!
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
