import React, { useState } from "react";
import "./Login.css";
import { validateLogin } from "../utils/loginHelper";

function Login() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if (validateLogin(email, password)) {
        alert("Login successful!");
        setError("");
        } else {
        setError("Invalid email or password");
        }
    };

  return(
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
