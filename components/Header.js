import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {

  const walletConnected = useSelector((state) => state.manageData.connected);

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Ethereal Owl</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/projects">
          <a className="item">Projects</a>
        </Link>
        { walletConnected ?
        <Link route="/">
          <a className="item">+</a>
        </Link>
        :
        <Menu.Item>
          <Button
            color="violet"
            onClick={onClickConnect}
          >
            Connect Wallet
          </Button>
        </Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
