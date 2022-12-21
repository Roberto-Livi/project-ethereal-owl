import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Link } from "../../routes";

const ProjectsHeader = ({ title, route, icon }) => {
  return (
    <div style={{ display: "flex" }}>
      <h2>{title}</h2>
      <div style={{ marginLeft: "auto" }}>
        <Link route={"/projects/create-project"}>
          <a>
            <Icon name={"plus circle"} size="big" />
          </a>
        </Link>
        <Link route={"/projects"}>
          <a>
            <Icon name={icon} size="big" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsHeader;
