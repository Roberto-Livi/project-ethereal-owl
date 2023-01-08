import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "semantic-ui-react";


const RecruitUserModal = ({ user, open, closeModal }) => {

  const projects = useSelector((state) => state.manageData.projects);

  useEffect(() => {
    console.log(user)
    console.log(projects)
  }, []);

  return (
    <Modal centered open={open} size={"small"}>
      <Modal.Header>Recruit</Modal.Header>
      <Modal.Content>
        <h1>Form</h1>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RecruitUserModal;