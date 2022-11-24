import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Ethereal Owl</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/projects">
          <a className="item">Projects</a>
        </Link>
        <Link route="/">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
