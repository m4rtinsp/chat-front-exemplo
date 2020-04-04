import React, { useState } from 'react';
import axios from 'axios';

import Chat from './chat';

import './App.css';

function App() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [messages1, setMessages1] = useState([]);
  const [messages2, setMessages2] = useState([]);

  const handleLogin = ({ usuario, senha }, tipo) => {
    axios.post('http://localhost:3000/user', { usuario, senha })
      .then(response => {
        console.log(response)

        if (tipo === 1) {
          setUser1(usuario);
        } else if (tipo === 2) {
          setUser2(usuario);
        }
      });
  }

  const handleMessage = (text, tipo) => {
    if (tipo === 1) {
      setMessages1([...messages1, text]);
    } else if (tipo === 2) {
      setMessages2([...messages2, text]);
    }
  }

  return (
    <div className="container">
      <Chat
        user={user1}
        onLogin={data => handleLogin(data, 1)}
        onMessage={text => handleMessage(text, 1)}
        messages={messages1} />

      <Chat
        user={user2}
        onLogin={data => handleLogin(data, 2)}
        onMessage={text => handleMessage(text, 2)}
        messages={messages2} />
    </div>
  );
}

export default App;
