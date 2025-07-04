import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email or username"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <a href="#" className="forgot-link">Forgot password?</a>
      </div>
    </div>
  );
} 