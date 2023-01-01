import React from "react";
import { Modal, Button } from "semantic-ui-react";


const ModalMessage = ({ header, message, open, closeModal }) => {
  return (
    <Modal
      centered
      open={open}
      size={"tiny"}
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {message}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalMessage;
