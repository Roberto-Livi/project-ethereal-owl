import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Tab } from "semantic-ui-react";
import Scrumboard from "./Scrumboard";
import Backlog from "./Backlog";
import { getScrumboardByProjectId } from "../../helpers/mongodb/ScrumCallCenter";
import { getScrumUsers } from "../../helpers/mongodb/UsersCallCenter";
import { setScrumData } from "../../store/actions";

const SubTabs = ({ projectId }) => {

  const dispatch = useDispatch();

  const [stories, setStories] = useState([]);
  const [codenames, setCodenames] = useState([]);

  const getData = async() => {
    const scrumData = await getScrumboardByProjectId(projectId);
    dispatch(setScrumData(scrumData.data));
    const users = await getScrumUsers(scrumData.data.users);
    setCodenames(users.map((user) => user.codename));
  }

  const panes = [
    {
      menuItem: "Scrum Board",
      render: () => (
        <Tab.Pane>
          <Scrumboard
            initialCards={[
              {
                id: "2",
                title: "Task 1",
                desc: "desc test",
                acceptanceCriteria: "Task AC test",
                storyPoints: 2,
                taskedTo: "Ron Stoppable",
                createdBy: "Me",
                status: "In Progress",
                sprintNum: "next",
              },
              {
                id: "3",
                title: "Task 2",
                desc: "desc test",
                acceptanceCriteria: "Task AC test",
                storyPoints: 2,
                taskedTo: "Ken Shimura",
                createdBy: "Me",
                status: "Ready",
                sprintStatus: "current",
              },
              {
                id: "4",
                title: "Task 3",
                desc: "desc test",
                acceptanceCriteria: "Task AC test",
                storyPoints: 3,
                taskedTo: "Ron Stoppable",
                createdBy: "Me",
                status: "Ready",
                sprintStatus: "current",
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
          <Backlog projectId={projectId} codenames={codenames} />
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
