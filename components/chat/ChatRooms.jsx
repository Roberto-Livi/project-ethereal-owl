import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "../../routes";
import { getChatRooms } from "../../helpers/mongodb/ChatCallCenter";
import { setChatRooms } from "../../store/actions";


const ChatRooms = () => {

  const dispatch = useDispatch();

  const [latestMessages, setLatestMessages] = useState({});

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);
  const rooms = useSelector((state) => state.manageData.chatRooms);

  const setTheRooms = async() => {
    if(userInfo) {
      const rms = await getChatRooms(userInfo.codename);
      dispatch(setChatRooms(rms));
    }
  }

  useEffect(() => {
    setTheRooms();
  }, [walletAddress, rooms]);

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
        {!!rooms.length && rooms.map((room, idx) => (
          <li
            key={idx}
            style={{
              margin: "16px",
              fontSize: "24px",
              color: "#00bfff",
              textShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
            }}
          >
            <Link route={`/chat-room/${room.roomId}`}>{room.roomId}</Link>
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
