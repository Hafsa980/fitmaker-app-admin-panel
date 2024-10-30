import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from '../images/logo.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === "admin@example.com" && password === "admin123") {
      // Navigate to Verification page
      navigate("/verification");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <p>Managing made delightful. Login now to experience it.</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Enter Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="john123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <p className="register">
            Don't have an account? <a href="/">Sign Up</a>
          </p>
          <div className="social-login">
            <button>Google</button>
            <button>Facebook</button>
            <button>Apple</button>
            <button>Windows</button>
          </div>
        </form>
      </div>
      <div className="image-section">
        <p>Find reliable and highly rated babysitters that fit your schedule effortlessly.</p>
      </div>
    </div>
  );
}

export default Login;
