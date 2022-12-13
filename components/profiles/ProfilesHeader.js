import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { Link } from "../../routes";


const ProfilesHeader = () => {

 const walletAddress = useSelector((state) => state.manageData.walletAddress);

  return (
    <div style={{ display: "flex" }}>
      <h2>Profiles</h2>
      <div style={{ marginLeft: "auto" }}>
        <Link route={`/profiles/${walletAddress}`}>
          <a>
            <Icon name="user circle" size="big" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProfilesHeader;