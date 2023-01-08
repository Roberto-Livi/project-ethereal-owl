import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import { getProject } from "../../helpers/users/users";
import _ from "lodash";


const RecruitUserModal = ({ user, open, closeModal }) => {

  const [submitMessage, setSubmitMessage] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projects = useSelector((state) => state.manageData.projects);

  const recruitUser = async() => {
    const data = await getProject(walletAddress, projects[0].id);
    if(hasAlreadyRequested(data.requests)) {
      setSubmitMessage(`${user.header} has already requested to join ${data.project.name}`);
    } else if(isMember(data.members)) {
      setSubmitMessage(
        `${user.header} is already a member of ${data.project.name}`
      );
    } else {
      // Send Notification to user; Send Request; Set Success Message
    }
  }

  const isMember = (users) => {
    const member = users.some((u) =>
      _.isEqual(u.codename, user.header)
    );
    return member;
  }

  const hasAlreadyRequested = (users) => {
    const requestAlreadyMadeByUser = users.some((u) =>
      _.isEqual(u.user.codename, user.header)
    );
    return requestAlreadyMadeByUser;
  }

  return (
    <Modal centered open={open} size={"small"}>
      <Modal.Header>{submitMessage}</Modal.Header>
      <Modal.Content>
        <h1>Form</h1>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>Close</Button>
        <Button positive onClick={recruitUser}>Recruit User</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RecruitUserModal;