import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Link } from "../../routes";

const ProjectsHeader = ({ title }) => {
  return (
    <div style={{ display: "flex" }}>
      <h2>{title}</h2>
      <div style={{ marginLeft: "auto" }}>
        <Link route={"/projects/create-project"}>
          <a>
            <Icon name={"plus circle"} size="big" color="violet" />
          </a>
        </Link>
        <Link route={"/projects"}>
          <a>
            <Icon name={"user secret"} size="big" color="violet" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsHeader;
