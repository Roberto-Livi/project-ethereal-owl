import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';

const socket = openSocket('http://localhost:3001');

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("join room", props.roomId);

    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    axios.get(`http://localhost:3001/messages/${props.roomId}`)
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("send message", props.roomId, message);
    axios.post("http://localhost:3001/messages", {
      roomId: props.roomId,
      message: message,
    });
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#3f3f3f",
        color: "white",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          margin: "0",
          marginBottom: "16px",
        }}
      >
        Chat Room: {props.roomId}
      </h1>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          width: "100%",
        }}
      >
        {messages.map((message, index) => (
          <li
            key={index}
            style={{
              margin: "16px 0",
              padding: "16px",
              backgroundColor: "#4f4f4f",
              borderRadius: "16px",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            {message}
          </li>
        ))}
      </ul>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "16px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            padding: "16px",
            fontSize: "16px",
            marginRight: "16px",
            backgroundColor: "#4f4f4f",
            color: "white",
            border: "none",
            borderRadius: "16px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          style={{
            padding: "16px",
            fontSize: "16px",
            backgroundColor: "#00bfff",
            color: "white",
            border: "none",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
