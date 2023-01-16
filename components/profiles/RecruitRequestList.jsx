import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  updateNotification,
  getUsersNotifications,
} from "../../helpers/mongodb/NotificationCallCenter";
import ModalMessage from "../utilities/ModalMessage";
import _ from "lodash";
import { updateCurrentProject } from "../../store/actions";
import { recruitUserResponse, getProject } from "../../helpers/users/users";

const RecruitRequestList = ({ requests }) => {
  const dispatch = useDispatch();

  const [transactionPending, setTransactionPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({ header: "", message: "" });

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const answerRequest = async (projectId, requestId, approved) => {
    setTransactionPending(true);
    const response = await recruitUserResponse(
      userInfo.userAddress,
      projectId,
      requestId,
      approved
    );
    if (response) {
      const data = await getProject(walletAddress, projectId);
      activateModal(data.project.name, approved);
      dispatch(updateCurrentProject(data));
      sendNotificationsToMembers(data.members, data.project.name, approved);
    }
    setTransactionPending(false);
  };

  const sendNotificationsToMembers = async (members, projectName, approved) => {
    const approvedMessage = approved ? "approved" : "rejected";
    members.forEach(async(member) => {
      const mongoUser = await getUsersNotifications(member.mongoNotificationsId);
      if (mongoUser.successfulResponse) {
        const notification = {
          message: `${userInfo.codename} has ${approvedMessage} the team's request to join ${projectName}`,
          seen: false
        };
        const updatedUser = {
          notifications: [notification, ...mongoUser.data.notifications]
        };
        updateNotification(member.mongoNotificationsId, updatedUser);
      }
    })
  };

  const activateModal = (projectName, approved) => {
    if (approved) {
      setModal({
        header: "Approved Request",
        message: `You have successfully approved the request to join ${projectName}`
      });
    } else {
      setModal({
        header: "Rejected Request",
        message: `You have rejected the request to join ${projectName}`
      });
    }
    setOpenModal(true);
  };

  return (
    <div>
      {requests.map((request, index) => (
        <div key={index}>
          <h3>{request.project.name}</h3>
          <Button
            disabled={transactionPending}
            color="violet"
            onClick={() =>
              answerRequest(request.project.id, request.requestId, true)
            }
          >
            Approve
          </Button>
          <Button
            disabled={transactionPending}
            color="red"
            onClick={() =>
              answerRequest(request.project.id, request.requestId, false)
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
};

export default RecruitRequestList;