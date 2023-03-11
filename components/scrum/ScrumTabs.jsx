import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "semantic-ui-react";
import Scrumboard from "./Scrumboard";
import Backlog from "./Backlog";
import { getScrumboardByProjectId } from "../../helpers/mongodb/ScrumCallCenter";
import { getScrumUsers } from "../../helpers/mongodb/UsersCallCenter";
import { setScrumData } from "../../store/actions";

const SubTabs = ({ projectId }) => {

  const dispatch = useDispatch();

  const [codenames, setCodenames] = useState([]);
  const [storyCards, setStoryCards] = useState([]);

  const data = useSelector((state) => state.manageData.scrumData);

  const getData = async () => {
    const scrumData = await getScrumboardByProjectId(projectId);
    if (scrumData) {
      dispatch(setScrumData(scrumData.data));
      const users = await getScrumUsers(scrumData.data.users);
      setCodenames(users.map((user) => user.codename));
      setStoryCards(
        scrumData.data.backlog.filter(
          (story) => story.sprintStatus === "Current Sprint"
        )
      );
    }
  };

  const panes = [
    {
      menuItem: "Scrum Board",
      render: () => (
        <Tab.Pane>
          <Scrumboard projectId={projectId} initialCards={storyCards} codenames={codenames} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Backlog",
      render: () => (
        <Tab.Pane>
          <Backlog projectId={projectId} codenames={codenames} />
        </Tab.Pane>
      )
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (e, { activeIndex }) => setActiveIndex(activeIndex);

  useEffect(() => {
    getData();
  }, [data]);

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
