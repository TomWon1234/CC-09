import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./LoginPage.css"


const LoginForm = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authStatus } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (authStatus === "signedIn") {
      navigate("/home");
    }
  }, [authStatus, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn(username, password);

      if (response.success) {
        navigate('/home');
      }
  };

  return (
    <div className="login-container">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    /><br />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    /><br />
    <button type="submit">Login</button>
  </form>
</div>
  );
};

export default LoginForm;
