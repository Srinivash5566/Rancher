import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import component from './stylesheet/component.module.css'; // Import CSS module

const Community = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, username: 'User 001', text: 'Lorem ipsum message 1', isUser: false },
    { id: 2, username: 'User 001', text: 'Lorem ipsum message 2', isUser: false },
    { id: 3, username: 'Srinivash A K', text: 'Lorem ipsum your message', isUser: true },
    { id: 4, username: 'User 002', text: 'Lorem ipsum message 3', isUser: false }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = { id: messages.length + 1, username: 'Srinivash A K', text: newMessage, isUser: true };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className={component.community}>
      <header className="header">
        <div className="logo">Rancher</div>
        <input
          type="text"
          placeholder="Type to Search..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="auth-buttons">
          <button className="sign-in" onClick={() => navigate('/LoginPage')}>
            Sign In
          </button>
          <button className="log-in">Log In</button>
        </div>
      </header>

      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link}>Home</Link>
        <Link to="/HarvestingEngines" className={component.nav_link}>Harvesting Engines</Link>
        <Link to="/Community" className={component.nav_link}>Community</Link>
        <Link to="#" className={component.nav_link}>About</Link>
      </nav>

      <div className={component.chat_container}>
        {messages.map((msg) => (
          <div key={msg.id} className={`${msg.isUser ? component.user_message : component.chat_message}`}>
            <div className={component.message_header}>~ {msg.username}</div>
            <div className={component.message_body}>{msg.text}</div>
          </div>
        ))}
      </div>

      <div className={component.message_input_container}>
        <input
          type="text"
          placeholder="Type your question"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Community;
