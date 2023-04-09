import { useState } from 'react';
import axios from 'axios';

const projectID = '74a69b9f-2e62-49f4-86f0-19d621457f78';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

    try {
        axios.get('https://api.chatengine.io/chats', { headers: authObject });

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
        setError('')

    } catch (error) {
        setError('Oops, Invalid Credendials');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 style={{color: 'red'}}>{error}</h2>
      </div>
    </div>

  );
};

export default Modal;