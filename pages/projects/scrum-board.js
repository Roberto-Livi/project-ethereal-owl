import React from "react";
import Layout from "../../components/utilities/Layout";
import Scrumboard from "../../components/scrum/Scrumboard";

const ScrumBoard = ({ projectId }) => {
  return (
    <Layout>
      Scrumboard {projectId}
      <Scrumboard
        initialCards={[
          {
            id: "1",
            title: "Task 1",
            desc: "desc test",
            acceptanceCriteria: "Task AC test",
            storyPoints: 2,
            taskedTo: "Ron Stoppable",
            createdBy: "Me",
            status: "Ready",
            sprintNum: 1,
          },
          {
            id: "2",
            title: "Task 2",
            desc: "desc test",
            acceptanceCriteria: "Task AC test",
            storyPoints: 2,
            taskedTo: "Ken Shimura",
            createdBy: "Me",
            status: "Ready",
            sprintNum: 1,
          },
          {
            id: "3",
            title: "Task 3",
            desc: "desc test",
            acceptanceCriteria: "Task AC test",
            storyPoints: 3,
            taskedTo: "Ron Stoppable",
            createdBy: "Me",
            status: "Ready",
            sprintNum: 1,
          }
        ]}
      />
    </Layout>
  );
}

ScrumBoard.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default ScrumBoard;