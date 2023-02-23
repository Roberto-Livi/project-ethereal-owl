import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import { getProject, removeUserFromProject, getProjectElementId, getUserElementIdFromProjMembers } from "../../helpers/users/users";
import { updateCurrentProject } from "../../store/actions";
import { Router } from "../../routes";


const MembersList = () => {

  const dispatch = useDispatch();

  const [selectedMember, setSelectedMember] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectData = useSelector((state) => state.manageData.currentProject);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const handleSelectMember = async(member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleDeleteMember = async() => {
    setLoading(true);
    const projId = await getProjectElementId(selectedMember.userAddress, projectData.project.name);
    const userElementId = await getUserElementIdFromProjMembers(
      selectedMember.codename,
      projectData.project.id
    );
    // Perform delete operation on selected member here.
    const resp = await removeUserFromProject(
      projectData.project.id,
      selectedMember.userAddress,
      projId,
      userElementId
    );
    if(resp) {
      updateProjMembers();
    }
    setSelectedMember(null);
    setLoading(false);
    setModalOpen(false);
  };

  const updateProjMembers = async () => {
    const data = await getProject(walletAddress, projectData.project.id);
    dispatch(updateCurrentProject(data));
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {projectData.members.map((member) => (
        <div
          key={member.id}
          onClick={() => handleSelectMember(member)}
          style={{
            width: "150px",
            height: "150px",
            margin: "10px",
            bordeRadius: "10px",
            boxShadow: "0px 0px 10px #ccc",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {member.codename}
          </p>
        </div>
      ))}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header style={{ textAlign: "center" }}>
          {selectedMember && selectedMember.codename}
        </Modal.Header>
        <Modal.Content>
          <h3 style={{ textAlign: "center" }}>
            Choose from the following options
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button loading={loading} onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          { projectData.isMember &&
            <Button loading={loading} negative onClick={handleDeleteMember}>
              Remove Member From Project
            </Button>
          }
          <Button
            loading={loading}
            positive
            onClick={() =>
              Router.pushRoute(`/profiles/${selectedMember.userAddress}`)
            }
          >
            Go To User Profile
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default MembersList;
