import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../utilities/socket";
import { Form, Input, Button } from "semantic-ui-react";

const ChatMessageForm = ({ roomId }) => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) return;
    socket.emit("update-chat", {
      roomId,
      message: { codename: userInfo.codename, message },
    });
    setMessage("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Input
        type="text"
        value={message}
        onChange={handleChange}
        style={{
          width: "700px",
          padding: "10px",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      />
      <Button
        type="submit"
        style={{
          fontSize: "20px",
          backgroundColor: "lightblue"
        }}
      >
        Send
      </Button>
    </Form>
  );
};

export default ChatMessageForm;
