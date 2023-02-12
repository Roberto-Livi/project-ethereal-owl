import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { SocketContext } from "../utilities/socket";
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import { searchMongoCodename } from "../../helpers/mongodb/UsersCallCenter";


const CreateChat = () => {

  const socket = useContext(SocketContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [options, setOptions] = useState([]);
  const [roomName, setRoomName] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const fetchData = async(searchTerm) => {
    const data = await searchMongoCodename(searchTerm);
    if(data) {
      const updatedArray = data.map((obj, idx) => ({
        ...obj,
        key: idx,
        text: data[idx].codename,
        value: data[idx].codename,
      }));
      setOptions(updatedArray);
    }
  }

  const handleMultiSelectChange = (event, data) => {
    setSelectedOptions(data.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSearchChange = (query) => {
    fetchData(query.target.value)
  }

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const users = [ ...selectedOptions, userInfo.codename];
    const roomId = uuidv4();
    const chatMessage = {
      codename: userInfo.codename,
      message: textValue
    };
    // Emit the 'create-chat' event to the server with the data
    socket.emit("create-chat", { roomId, roomName, users, chatMessage });
    setIsOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Modal Form</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Dropdown
                fluid
                multiple
                selection
                search={true}
                onSearchChange={handleSearchChange}
                options={options}
                value={selectedOptions}
                onChange={handleMultiSelectChange}
                placeholder="Select options"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                value={roomName}
                onChange={handleRoomNameChange}
                placeholder="Enter Room Name..."
              />
            </Form.Field>
            <Form.Field>
              <Form.TextArea
                value={textValue}
                onChange={handleTextChange}
                placeholder="Enter Message..."
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} primary>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateChat;
