import React, { useState, useEffect, useContext } from "react";
import { Modal, Dropdown, Button } from "semantic-ui-react";
import { SocketContext } from "../utilities/socket";
import { searchMongoCodename } from "../../helpers/mongodb/UsersCallCenter";

const AddUserToChat = ({ roomId, chatData }) => {

  const socket = useContext(SocketContext);

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [headerMessage, setHeaderMessage] = useState("Add User to Chat");

  const fetchData = async (searchTerm) => {
    if (_.isEmpty(searchTerm)) {
      return;
    }
    setTimeout(async() => {
      const data = await searchMongoCodename(searchTerm);
      if (data) {
        const updatedArray = data.map((obj, idx) => ({
          key: idx,
          value: data[idx].codename,
          text: data[idx].codename
        }));
        setOptions(updatedArray);
      }
    }, 1000);
  };

  const handleAddUser = () => {
    const alreadyInChat = userAlreadyInChat(chatData.users, selectedUser);
    if (selectedUser && !alreadyInChat) {
      socket.emit("add-user-to-chat", { roomId, codename: selectedUser });
      setOpen(false);
    } else if(selectedUser && alreadyInChat) {
      setHeaderMessage(`${selectedUser} is already in the chat`);
    }
  };

  const userAlreadyInChat = (users, selected) => {
    return users.some((user) => user === selected);
  }

  const handleSearchChange = (event, data) => {
    setHeaderMessage(`Add User to Chat`);
    setSearchTerm(data.searchQuery);
  };

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      trigger={<Button onClick={() => setOpen(true)}>Add User</Button>}
    >
      <Modal.Header>{headerMessage}</Modal.Header>
      <Modal.Content>
        <Dropdown
          placeholder="Select User"
          selection
          search
          fluid
          options={options}
          onSearchChange={handleSearchChange}
          onChange={(e, data) => setSelectedUser(data.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button primary onClick={handleAddUser}>
          Add User
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddUserToChat;
