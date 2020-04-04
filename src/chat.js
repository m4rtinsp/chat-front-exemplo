import React, { useState } from 'react';

function Chat({ onLogin, onMessage, user, messages }) {
  const [message, setMessage] = useState('');

  const handleEnter = (e) => {
    const value = e.target.value;

    if (e.key === 'Enter') {
      if (value.indexOf('login:') !== -1) {
        const [usuario, senha] = value.replace('login:', '').split('/');
        onLogin({ usuario, senha });
      } else {
        onMessage(value);
      }
      
      setMessage('');
    }
  }

  const handleInput = (e) => {
    const value = e.target.value;
    setMessage(value);
  }

  return (
    <div className="chat">
      <div className="user">
        <p>Usuário logado: {user ? user : 'Nenhum'}</p>
      </div>
      <div className="messages">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <div className="input">
        <input type="text" value={message} onChange={handleInput} onKeyDown={handleEnter} />
      </div>
    </div>
  );
}

export default Chat;