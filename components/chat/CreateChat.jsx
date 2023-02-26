import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { SocketContext } from "../utilities/socket";
import { Button, Form, Modal } from "semantic-ui-react";
import { searchMongoCodename } from "../../helpers/mongodb/UsersCallCenter";
import _ from "lodash";
import Select from "react-select";
import { getChatRooms } from "../../helpers/mongodb/ChatCallCenter";
import { setChatRooms } from "../../store/actions";


const CreateChat = () => {

  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [options, setOptions] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const fetchData = async(searchTerm) => {
    if(_.isEmpty(searchTerm)) {
      return;
    }
    const data = await searchMongoCodename(searchTerm);
    setTimeout(() => {
      if (data) {
        const updatedArray = data.map((obj, idx) => ({
          // ...obj,
          key: idx,
          label: data[idx].codename,
          value: data[idx].codename,
        }));
        setOptions(updatedArray);
      }
    }, 1000);
  }

  const handleMultiSelectChange = (data) => {
    setSelectedOptions(data);
    if (!_.isEqual(userInfo.codename, data[data.length - 1].value)) {
      setSelected((previousState) => [
        ...previousState,
        data[data.length - 1].value
      ]);
    }
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSearchChange = (query) => {
    setSearchTerm(query);
  }

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const users = [ ...selected, userInfo.codename];
    const roomId = uuidv4();
    const chatMessage = {
      codename: userInfo.codename,
      message: textValue
    };
    // Emit the 'create-chat' event to the server with the data
    socket.emit("create-chat", { roomId, roomName, users, chatMessage });
    const rms = await getChatRooms(userInfo.codename);
    dispatch(setChatRooms(rms));
    setIsOpen(false);
  };

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <Button primary onClick={() => setIsOpen(true)}>Create a Room</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Modal Form</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleMultiSelectChange}
                onInputChange={handleSearchChange}
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
