import React, { useState, useEffect } from "react";
import { Tab } from "semantic-ui-react";
import Scrumboard from "./Scrumboard";
import Backlog from "./Backlog";
import { getScrumboardByProjectId } from "../../helpers/mongodb/ScrumCallCenter";

const SubTabs = ({ projectId }) => {

  const [stories, setStories] = useState([]);

  const getData = async() => {
    const data = await getScrumboardByProjectId(projectId);
    console.log(data)
  }

  const panes = [
    {
      menuItem: "Scrum Board",
      render: () => (
        <Tab.Pane>
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
              },
            ]}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Backlog",
      render: () => (
        <Tab.Pane>
          <Backlog projectId={projectId} />
        </Tab.Pane>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (e, { activeIndex }) => setActiveIndex(activeIndex);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Tab
        panes={panes}
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default SubTabs;
