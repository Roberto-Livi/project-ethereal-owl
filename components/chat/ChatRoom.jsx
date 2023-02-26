import React from "react";
import { useSelector } from "react-redux";
import AddUserToChat from "./AddUserToChat";
import ChatMembers from "./ChatMembers";

const ChatRoom = ({ chatData, roomId }) => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <div>
      <ChatMembers roomId={roomId} />
      <AddUserToChat chatData={chatData} roomId={roomId} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%"
        }}
      >
        {chatData.messages?.length &&
          chatData.messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "10px",
                justifyContent:
                  message.codename === userInfo.codename
                    ? "flex-end"
                    : "flex-start",
                backgroundColor:
                  message.codename === userInfo.codename
                    ? "rgba(10, 153, 255, 2.1)"
                    : "rgba(15, 43, 330, 0.1)",
                color:
                  message.codename === userInfo.codename ? "white" : "black",
                marginRight:
                  message.codename === userInfo.codename ? "auto" : 0,
                marginLeft: message.codename === userInfo.codename ? 0 : "auto",
              }}
            >
              <div style={{ fontWeight: "bold", marginRight: "5px" }}>
                {message.codename}:
              </div>
              <div style={{ padding: "5px" }}>{message.message}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatRoom;