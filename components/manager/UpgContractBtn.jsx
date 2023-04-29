import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import { upgradeContract } from "../../helpers/users/users";

const UpgContractBtn = () => {

  const [inputValue, setInputValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await upgradeContract(inputValue);
    setLoading(false);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>Upgrade Contract</Button>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <Modal.Header>Input Value</Modal.Header>
        <Modal.Content>
          <Input
            type="text"
            fluid
            placeholder="Enter address"
            value={inputValue}
            onChange={handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button loading={loading} onClick={handleSubmit} primary>
            Execute
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default UpgContractBtn;
