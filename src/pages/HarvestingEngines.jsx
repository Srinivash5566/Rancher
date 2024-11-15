import { Link, useNavigate } from 'react-router-dom';
import component from './stylesheet/component.module.css'; // Import the CSS module
import { useState, useEffect } from 'react';

const HarvestingEngines = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Set logged in state based on token presence
  }, []);

  // Define your engines with appropriate image paths
  const engines = [
    { id: 1, image: 'https://placehold.co/600x400', alt: 'Yellow Construction Vehicle' },
    { id: 2, image: 'https://placehold.co/600x400', alt: 'Drilling Machine' },
    { id: 3, image: 'https://placehold.co/600x400', alt: 'Green Tractor' },
    { id: 4, image: 'https://placehold.co/600x400', alt: 'Red Tractor' },
  ];

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    setIsLoggedIn(false); // Update the state to reflect logout
  };

  return (
    <div className={component.harvesting_engines}>
      <header className="header">
        <div className="logo">Rancher</div>
        <input
          type="text"
          placeholder="Type to Search..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button className="log-out" onClick={handleLogout}>Log Out</button>
          ) : (
            <>
              <button className="sign-in" onClick={() => navigate('/LoginPage')}>Sign In</button>
              <button className="log-in">Log In</button>
            </>
          )}
        </div>
      </header>

      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link}>Home</Link>
        <Link to="/HarvestingEngines" className={component.nav_link}>Harvesting Engines</Link>
        <Link to="/Community" className={component.nav_link}>Community</Link>
        <Link to="#" className={component.nav_link}>About</Link>
      </nav>

      <div className={component.engine_list}>
        {engines
          .filter((engine) => engine.alt.toLowerCase().includes(search.toLowerCase()))
          .map((engine) => (
            <div key={engine.id} className={component.engine_item}>
              <img src={engine.image} alt={engine.alt} />
              <div className={component.engine_info}>
                <h3>{engine.alt}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HarvestingEngines;
