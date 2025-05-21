import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import CalendarPage from './pages/CalendarPage';
import InventoryPage from './pages/InventoryPage';
import AnalyticsPage from './pages/AnalyticsPage';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Use ProtectedRoute to wrap protected routes */}
      <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
      <Route path="/calendar" element={<ProtectedRoute element={CalendarPage} />} />
      <Route path="/inventory" element={<ProtectedRoute element={InventoryPage} />} />
      <Route path="/analytics" element={<ProtectedRoute element={AnalyticsPage} />} />
      
      {/* Default redirect to /home */}
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
