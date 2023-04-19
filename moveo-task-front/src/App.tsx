import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LobbyPage from "../src/component/LobbyPage/LobbyPage"
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io("http://localhost:8000")

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessageReceived(data.message)
    });
  }, [socket]);

    const handleInputChange = (event:any) => {
    setMessage(event.target.value);
    socket.emit("send_message", { message: event.target.value });
  };

  return (
    <div className="APP">
      <input  
      placeholder='Message-front' 
      value={message}
      onChange={handleInputChange}
      />
      <button>send message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
		// <BrowserRouter>
    //   <Routes>
    //     <Route
    //         path="/"
    //         element={<LobbyPage />}
		// 		/>
    //   </Routes>
		// </BrowserRouter>
  );
}

export default App;
