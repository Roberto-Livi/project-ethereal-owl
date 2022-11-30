import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {

  const [connecting, setConnecting] = useState(false);

  const address = useSelector((state) => state.manageData.walletAddress);
  const walletConnected = useSelector((state) => state.manageData.connected);

  const onClickConnect = async () => {
    try {
      setConnecting(true);
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
    setConnecting(false);
  };

  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Ethereal Owl</a>
      </Link>

      <Menu.Menu position="right">
        <Link route={`/users/${address}`}>
          <a className="item">Profile</a>
        </Link>
        <Link route="/projects">
          <a className="item">Projects</a>
        </Link>
        {walletConnected && (
          <Link route="/">
            <a className="item">+</a>
          </Link>
        )}
        <Menu.Item>
          <Button
            color="violet"
            onClick={onClickConnect}
            disabled={walletConnected}
            loading={connecting}
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
