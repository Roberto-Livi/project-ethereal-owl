import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import styled from "styled-components";

const MembersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .member {
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .member-name {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const MembersList = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleDeleteMember = () => {
    // Perform delete operation on selected member here.
    setSelectedMember(null);
    setModalOpen(false);
  };

  return (
    <MembersListContainer className="members-list">
      {members.map((member) => (
        <div
          key={member.id}
          onClick={() => handleSelectMember(member)}
          className="member"
        >
          <p className="member-name">{member.codename}</p>
        </div>
      ))}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Delete Member</Modal.Header>
        <Modal.Content>
          <p>
            Are you sure you want to delete{" "}
            {selectedMember && selectedMember.codename}?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
          <button onClick={handleDeleteMember}>Delete</button>
        </Modal.Actions>
      </Modal>
    </MembersListContainer>
  );
};

export default MembersList;
