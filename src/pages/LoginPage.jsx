import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import './stylesheet/LoginPage.css';

const LoginPage = () => {
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
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
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
          Do you have an account? <Link to="/RegisterPage">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
