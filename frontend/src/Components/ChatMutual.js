import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (sender) => {
    if (!input.trim()) return;

    const newMessage = { sender, content: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost/api/chat', {
        message: input,
        sender,
      });

      const botMessage = {
        sender: sender === 'chatgpt' ? 'copilot' : 'chatgpt',
        content: response.data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div>
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'chatgpt' ? 'left' : 'right',
              margin: '10px',
            }}
          >
            <b>{msg.sender}:</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={() => sendMessage('chatgpt')}>Send as ChatGPT</button>
      <button onClick={() => sendMessage('copilot')}>Send as Copilot</button>
    </div>
  );
};

export default Chat;
