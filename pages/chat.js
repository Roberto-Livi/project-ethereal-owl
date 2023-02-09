import React, { useEffect } from "react";
import Layout from "../components/utilities/Layout";


const Chat = ({ roomId }) => {

  useEffect(() => {
    console.log(roomId)
  }, []);

  return (
    <Layout>
      <h1>Chat</h1>
    </Layout>
  );
}

Chat.getInitialProps = (props) => {
  return { roomId: props.query.roomId };
};

export default Chat;