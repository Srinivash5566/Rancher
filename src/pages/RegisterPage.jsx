import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './stylesheet/LoginPage.css';

const RegisterPage = () => {
  const [userName,setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigator("/")
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleLogin}>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="signup-prompt">
          Do you have an account? <Link to="/LoginPage">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
