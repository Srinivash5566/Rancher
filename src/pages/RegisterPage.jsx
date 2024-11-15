import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './stylesheet/LoginPage.css';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post('/register', { userName, email, password });
        console.log('Registration successful:', response.data);
        navigate('/');  // Redirect to home after successful registration
    } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
    }
};


  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
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
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
