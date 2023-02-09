import React, { useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";


const CreateChat = () => {

  const socket = io("http://localhost:3001");

  const [modalOpen, setModalOpen] = useState(false);
  const [userId2, setUserId2] = useState("");
  const [message, setMessage] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const roomId = uuidv4();
    const chatMessage = {
      address: walletAddress,
      message
    };
    // Emit the 'create-chat' event to the server with the data
    socket.emit("create-chat", { roomId, userId1: walletAddress, userId2, chatMessage });
    handleModalClose();
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Create Chat</button>
      {modalOpen && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User Wallet Address"
              value={userId2}
              onChange={(event) => setUserId2(event.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Create Chat</button>
          </form>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CreateChat;
