import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import ChatRoom from "../components/chat/ChatRoom";
import ChatMessageForm from "../components/chat/ChatMessageForm";
import { getChatRoom } from "../helpers/mongodb/ChatCallCenter";
import { SocketContext } from "../components/utilities/socket";


const Chat = ({ roomId }) => {

  const socket = useContext(SocketContext);

  const [messages, setMessages] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getRoomData = async () => {
    const data = await getChatRoom(roomId);
    setMessages(data.messages);
  };

  useEffect(() => {
    getRoomData();
  }, []);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive-message");
    }
  }, [socket]);

  return (
    <Layout>
      <ChatRoom messages={messages} roomId={roomId} />
      <ChatMessageForm roomId={roomId} />
    </Layout>
  );
}

Chat.getInitialProps = (props) => {
  return { roomId: props.query.roomId };
};

export default Chat;