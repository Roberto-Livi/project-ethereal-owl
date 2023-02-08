import React, { useState, useEffect } from "react";

const ChatRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [latestMessages, setLatestMessages] = useState({});

  useEffect(() => {
    socket.on("rooms", (rooms) => {
      setRooms(rooms);
    });
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setLatestMessages({
        ...latestMessages,
        [message.room]: message.text,
      });
    });
  }, [latestMessages]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#333",
      }}
    >
      <h1
        style={{
          color: "#00bfff",
          fontSize: "48px",
          textShadow:
            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        Chat Rooms
      </h1>
      <ul
        style={{
          listStyle: "none",
          width: "80%",
          padding: "0",
          textAlign: "center",
        }}
      >
        {rooms.map((room) => (
          <li
            key={room}
            style={{
              margin: "16px",
              fontSize: "24px",
              color: "#00bfff",
              textShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            <Link to={`/chat-room/${room}`}>{room}</Link>
            <br />
            <span
              style={{
                fontSize: "16px",
                color: "white",
                textShadow:
                  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
              }}
            >
              {latestMessages[room] || "No messages yet"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRooms;
