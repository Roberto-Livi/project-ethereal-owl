import React, { useState } from "react";
import { useSelector } from "react-redux";
import socketIOClient from "socket.io-client";

const endpoint = "http://localhost:3001";
const socket = socketIOClient(endpoint);

const ChatMessageForm = ({ roomId, userId1, userId2 }) => {

  const [message, setMessage] = useState("");

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) return;
    socket.emit("update-chat", { roomId, userId1, userId2, message: { codename: userInfo.codename, message } });
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        value={message}
        onChange={handleChange}
        style={{
          width: "700px",
          padding: "10px",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px",
          fontSize: "20px",
          backgroundColor: "lightblue",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ChatMessageForm;
