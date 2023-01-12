import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerJoinRequest, getProject } from "../../helpers/users/users";
import { Button } from "semantic-ui-react";
import { updateNotification, getUsersNotifications } from "../../helpers/mongodb/NotificationCallCenter";
import ModalMessage from "../utilities/ModalMessage";
import _ from "lodash";
import { updateCurrentProject } from "../../store/actions";


const PendingRequests = ({ projectId }) => {

  const dispatch = useDispatch();

  const [transactionPending, setTransactionPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({ header: "", message: ""});

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projectData = useSelector((state) => state.manageData.currentProject);

  const answerRequest = async(user, requestId, approved) => {
    setTransactionPending(true);
    const response = await answerJoinRequest(user.userAddress, projectId, requestId, approved);
    if(response) {
      if(!_.isEqual(user.mongoNotificationsId, "0")) {
        activateModal(user, approved);
        sendNotification(user.mongoNotificationsId, approved);
        const data = await getProject(walletAddress, projectId);
        dispatch(updateCurrentProject(data));
      }
    }
    setTransactionPending(false);
  }

  const sendNotification = async(mongoId, approved) => {
    const approvedMessage = approved ? "approved" : "rejected";
    const mongoUser = await getUsersNotifications(mongoId);
    if(mongoUser.successfulResponse) {
      const notification = {
        message: `${userInfo.codename} has ${approvedMessage} your request to join ${projectData.project.name}`,
        seen: false
      };
      const updatedUser = {
        notifications: [notification, ...mongoUser.data.notifications],
      };
      updateNotification(mongoId, updatedUser);
    }
  }

  const activateModal = (user, approved) => {
    if(approved) {
      setModal({
        header: "Approved Request",
        message: `You have successfully approved ${user.codename}'s request to join ${projectData.project.name}`
      });
    } else {
      setModal({
        header: "Rejected Request",
        message: `You have rejected ${user.codename}'s request to join ${projectData.project.name}`
      });
    }
    setOpenModal(true);
  }

  return (
    <div>
      <h2>Pending Requests</h2>
      {projectData.requests.map((request, index) => (
        <div key={index}>
          <h3>{request.user.codename}</h3>
          <Button
            disabled={transactionPending}
            color="violet"
            onClick={() => answerRequest(request.user, request.requestId, true)}
          >
            Approve
          </Button>
          <Button
            disabled={transactionPending}
            color="red"
            onClick={() =>
              answerRequest(request.user, request.requestId, false)
            }
          >
            Reject
          </Button>
          <ModalMessage
            header={modal.header}
            message={modal.message}
            open={openModal}
            closeModal={() => setOpenModal(false)}
          />
        </div>
      ))}
    </div>
  );
}

export default PendingRequests;