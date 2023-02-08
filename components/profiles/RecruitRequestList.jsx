import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import {
  updateNotification,
  getUsersNotifications
} from "../../helpers/mongodb/NotificationCallCenter";
import ModalMessage from "../utilities/ModalMessage";
import _ from "lodash";
import { updateCurrentProject, updateRecruitRequests, updateUserInfo } from "../../store/actions";
import { recruitUserResponse, getProject, getUserData, getUsersRecruitRequests } from "../../helpers/users/users";

const RecruitRequestList = ({ profileAddress }) => {
  const dispatch = useDispatch();

  const [transactionPending, setTransactionPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({ header: "", message: "" });

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const requests = useSelector((state) => state.manageData.recruitRequests);

  const answerRequest = async (projectId, requestId, approved) => {
    setTransactionPending(true);
    const response = await recruitUserResponse(
      userInfo.userAddress,
      projectId,
      requestId,
      approved
    );
    const data = await getProject(walletAddress, projectId);
    if (response) {
      const user = await getUserData();
      dispatch(updateUserInfo(user));
      dispatch(updateCurrentProject(data));
      updateRequestList();
      sendNotificationsToMembers(data.members, data.project.name, approved);
    }
    if(response) {
      activateModal(data.project.name, approved);
    }
    setTransactionPending(false);
  };

  const sendNotificationsToMembers = async (members, projectName, approved) => {
    const approvedMessage = approved ? "approved" : "rejected";
    members.forEach(async(member) => {
      const mongoUser = await getUsersNotifications(member.mongoNotificationsId);
      if (
        mongoUser.successfulResponse &&
        !_.isEqual(member.mongoNotificationsId, userInfo.mongoNotificationsId)
      ) {
        const notification = {
          message: `${userInfo.codename} has ${approvedMessage} the team's request to join ${projectName}`,
          seen: false,
        };
        const updatedUser = {
          notifications: [notification, ...mongoUser.data.notifications],
        };
        updateNotification(member.mongoNotificationsId, updatedUser);
      }
    })
  };

  const activateModal = async (projectName, approved) => {
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

  const updateRequestList = async() => {
    const reqs = await getUsersRecruitRequests(
      profileAddress,
      parseInt(userInfo.pendingRequestsCount - 1)
    );
    dispatch(updateRecruitRequests(reqs));
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div>
      <Segment>
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
          </div>
        ))}
        <ModalMessage
          header={modal.header}
          message={modal.message}
          open={openModal}
          closeModal={closeModal}
        />
        <Dimmer active={transactionPending} inverted>
          <Loader style={{ fontSize: "25px", top: "150px" }}>
            Transaction Pending
          </Loader>
        </Dimmer>
      </Segment>
    </div>
  );
};

export default RecruitRequestList;