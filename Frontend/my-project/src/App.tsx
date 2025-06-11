import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import DashboardLayout from "./Pages/DashboardLayout";
import "./App.css";
import ForgotPassword from "./Pages/ForgotPassword";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </Router>
);

export default App;
