import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Link } from "../../routes";


const PageHeader = ({ route, icon}) => {

  return (
    <div style={{ display: "flex" }}>
      <h2>Profiles</h2>
      <div style={{ marginLeft: "auto" }}>
        <Link route={route}>
          <a>
            <Icon name={icon} size="big" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PageHeader;