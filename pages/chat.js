import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import ChatRoom from "../components/chat/ChatRoom";
import ChatMessageForm from "../components/chat/ChatMessageForm";
import { getChatRoom } from "../helpers/mongodb/ChatCallCenter";
import socket from "../components/utilities/socket";


const Chat = ({ roomId }) => {

  const [userAddress1, setUserAddress1] = useState("");
  const [userAddress2, setUserAddress2] = useState("");
  const [messages, setMessages] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getRoomData = async () => {
    const data = await getChatRoom(roomId, walletAddress);
    setMessages(data.messages);
    setUserAddress1(data.userId1);
    setUserAddress2(data.userId2);
  };

  useEffect(() => {
    getRoomData();
  }, []);

  useEffect(() => {
    socket.on("update-chat", (data) => {
      console.log("update-chat")
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  return (
    <Layout>
      <ChatRoom messages={messages} />
      <ChatMessageForm roomId={roomId} userId1={userAddress1} userId2={userAddress2} />
    </Layout>
  );
}

Chat.getInitialProps = (props) => {
  return { roomId: props.query.roomId };
};

export default Chat;