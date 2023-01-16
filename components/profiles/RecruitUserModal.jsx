import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Message, Dropdown } from "semantic-ui-react";
import { getProject, getUsersRecruitRequests, recruitUser } from "../../helpers/users/users";
import _ from "lodash";
import { updateNotification, getUsersNotifications } from "../../helpers/mongodb/NotificationCallCenter";


const RecruitUserModal = ({ user, open, closeModal }) => {

  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projects = useSelector((state) => state.manageData.projects);

  const sendRecruitRequest = async() => {
    setLoading(true);
    const data = await getProject(walletAddress, selectedOption);
    const usersRecruitReqs = await getUsersRecruitRequests(user.address, parseInt(user.requestsCount));
    console.log(user)
    console.log(usersRecruitReqs)
    // if(hasAlreadyRequested(data.requests)) {
    //   setSubmitMessage(`${user.header} has already requested to join ${data.project.name}`);
    // } else if(isMember(data.members)) {
    //   setSubmitMessage(
    //     `${user.header} is already a member of ${data.project.name}`
    //   );
    // } else {
    //   setSubmitMessage(
    //     `Sending request to ${user.header} to join ${data.project.name}`
    //   );
    //   console.log("sending request")
    //   // const response = await recruitUser(user.address, data.project.id);
    //   // if(!_.isEqual(user.mongoNotificationsId, "0") && response) {
    //   //   sendNotificationToUser(user.address);
    //   // }
    // }
    setLoading(false);
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

  const sendNotificationToUser = async(user) => {
    const mongoUser = await getUsersNotifications(user.mongoNotificationsId);
    if(mongoUser.successfulResponse) {
      const notification = {
        message: `${userInfo.codename} has requested you to join ${projectData.project.name}`,
        seen: false
      };
      const updatedUser = {
        notifications: [notification, ...mongoUser.data.notifications]
      };
      updateNotification(user.mongoNotificationsId, updatedUser);
    }
  }

  const setDropdown = () => {
    const ops = [];
    projects.forEach((proj, idx) => {
      ops.push({
        key: idx,
        text: proj.name,
        value: proj.id
      });
    })
    setDropdownOptions(ops);
  }

  useEffect(() => {
    setDropdown();
  }, [projects]);

  return (
    <Modal centered open={open} size={"small"}>
      <Modal.Header>{submitMessage}</Modal.Header>
      <Modal.Content>
        {projects.length ? (
          <Dropdown
            placeholder="Select Project"
            fluid
            selection
            onChange={(e, obj) => setSelectedOption(obj.value)}
            options={dropdownOptions}
          />
        ) : (
          <Message>
            <Message.Header>
              Unable to recruit user since you aren't involved in any projects
            </Message.Header>
          </Message>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button loading={loading} onClick={closeModal}>
          Close
        </Button>
        <Button loading={loading} positive onClick={sendRecruitRequest}>
          Recruit User
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RecruitUserModal;