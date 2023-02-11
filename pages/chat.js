import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import ChatRoom from "../components/chat/ChatRoom";
import ChatMessageForm from "../components/chat/ChatMessageForm";
import { getChatRoom } from "../helpers/mongodb/ChatCallCenter";
import { SocketContext } from "../components/utilities/socket";


const Chat = ({ roomId }) => {

  const socket = useContext(SocketContext);

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
    socket.on("receive-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive-message");
    }
  }, [socket]);

  return (
    <Layout>
      <ChatRoom messages={messages} />
      <ChatMessageForm roomId={roomId} userId1={userAddress1} userId2={userAddress2} socket={socket} />
    </Layout>
  );
}

Chat.getInitialProps = (props) => {
  return { roomId: props.query.roomId };
};

export default Chat;