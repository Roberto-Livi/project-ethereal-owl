import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Message } from "semantic-ui-react";
import { addNotification } from "../../helpers/mongodb/NotificationCallCenter";
import { makeJoinRequest, getPendingRequestsAfterJoinRequest } from "../../helpers/users/users";
import _ from "lodash";
import { getUsersNotifications } from "../../helpers/mongodb/NotificationCallCenter";
import ModalMessage from "../utilities/ModalMessage";


const JoinRequest = ({ projectData, projectId }) => {

  const [hideError, setHideError] = useState(true);
  const [transactionPending, setTransactionPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [requestButton, setRequestButton] = useState({ label: "Request to Join", disabled: false });

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const joinRequest = async() => {
    setTransactionPending(true);
    if(userInfo) {
      const resp = await makeJoinRequest(walletAddress, projectId);
      setHideError(true);
      if(resp) {
        sendNotificationsToMembers(projectData.members);
        setOpenModal(true);
        isRequestPending();
      }
    } else {
      setHideError(false);
    }
    setTransactionPending(false);
  };

  const sendNotificationsToMembers = (members) => {
    members.map(async(member) => {
      if(!_.isEqual(member.mongoNotificationsId, "0")) {
        const mongoUser = await getUsersNotifications(member.mongoNotificationsId);
        if(mongoUser.successfulResponse) {
          const notification = {
            message: `${userInfo.codename} has requested to join ${projectData.project.name}`,
          };
          const updatedNotifications = [notification, ...mongoUser.data];
          addNotification(member.mongoNotificationsId, updatedNotifications);
        }
      }
    })
  }

  const isRequestPending = async() => {
    if(userInfo && !projectData.isMember) {
      const resp = await getPendingRequestsAfterJoinRequest(projectData.project.id);
      const pending = await resp.some((request) =>
        _.isEqual(request.user.userAddress, userInfo.userAddress)
      );
      if (pending) {
        setRequestButton({ label: "Request Pending", disabled: true });
      }
    }
  }

  useEffect(() => {
    isRequestPending();
  }, [userInfo, projectData.project, projectData.isMember]);

  return (
    <div>
      <Button disabled={requestButton.disabled} loading={transactionPending} color="violet" onClick={joinRequest}>
        {requestButton.label}
      </Button>
      <ModalMessage
        header="Request Sent"
        message={`You have successfully sent your request to join ${projectData.project.name}`}
        open={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <Message hidden={hideError} negative>
        <Message.Header>Unable to send request</Message.Header>
        <p>Please connect your wallet or create a user profile</p>
      </Message>
    </div>
  );
}

export default JoinRequest;