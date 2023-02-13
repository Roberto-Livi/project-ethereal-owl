import React from "react";
import Layout from "../components/utilities/Layout";
import ChatRooms from "../components/chat/ChatRooms";
import CreateChat from "../components/chat/CreateChat";


const Chats = () => {
  return (
    <Layout>
      <h1>Chat</h1>
      <CreateChat />
      <ChatRooms />
    </Layout>
  );
}

export default Chats;