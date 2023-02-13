import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../utilities/socket";
import { List, Loader, Segment, Button, Modal } from "semantic-ui-react";
import { getChatRoom } from "../../helpers/mongodb/ChatCallCenter";

const ChatMembers = ({ roomId }) => {

  const socket = useContext(SocketContext);

  const [usersInChat, setUsersInChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [codenameToRemove, setCodenameToRemove] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getRoomData = async () => {
    setLoading(true);
    const data = await getChatRoom(roomId);
    setUsersInChat(data.users);
    setLoading(false);
  };

  const handleRemove = (codename) => {
    setOpenModal(true);
    setCodenameToRemove(codename);
  };

  const confirmRemove = () => {
    setOpenModal(false);
    socket.emit("remove-user-from-chat", {
      roomId,
      codename: codenameToRemove
    });
    getRoomData();
  };

  useEffect(() => {
    getRoomData();
  }, []);

  return (
    <Segment style={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <Loader active />
      ) : (
        <List style={{ maxWidth: 400 }}>
          {usersInChat.map((user) => (
            <List.Item key={user} style={{ display: "flex" }}>
              <List.Content style={{ flex: 1 }}>{user}</List.Content>
              <List.Content style={{ paddingLeft: 10 }}>
                <button
                  onClick={() => handleRemove(user)}
                  style={{
                    backgroundColor: "#8B0000",
                    color: "#fff",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: 5,
                  }}
                >
                  -
                </button>
              </List.Content>
            </List.Item>
          ))}
        </List>
      )}
      <Modal open={openModal}>
        <Modal.Header>Remove User</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to remove this user from the chat room?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenModal(false)} negative>
            No
          </Button>
          <Button onClick={confirmRemove} positive>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Segment>
  );
};

export default ChatMembers;
