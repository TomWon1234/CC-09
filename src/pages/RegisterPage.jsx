import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterRequest } from '../api'; // Import the RegisterRequest function

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate username and password
    if (!username || !password) {
      return;
    }

    try {
      // Attempt to register the user via API
      const response = await RegisterRequest(username, password);

      // On success, redirect to the login page or another page
      if (response.success) {
        navigate('/login');
      } else {
        return;
      }
    } catch (err) {
      setError('An error occurred while registering.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
