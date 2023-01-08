import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Button, Label } from "semantic-ui-react";
import { Link } from "../../routes";
import { ROUTES } from "./constants";
import _ from "lodash";
import { updateUnreadNotifications } from "../../store/actions";

const NavHeader = () => {

  const dispatch = useDispatch();

  const [connecting, setConnecting] = useState(false);

  const address = useSelector((state) => state.manageData.walletAddress);
  const admin = useSelector((state) => state.manageData.admin);
  const walletConnected = useSelector((state) => state.manageData.connected);
  const userInfo = useSelector((state) => state.manageData.userInfo);
  const notificationsUnread = useSelector((state) => state.manageData.notificationsUnread);

  const mongoClient = useSelector(
    (state) => state.manageData.mongoNotifications
  );

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

  const notificationsUnreadCount = () => {
    let count = 0;

    if(mongoClient) {
      const unreadFiltered = mongoClient.notifications.filter((n) => _.isEqual(n.seen, false));
      count = unreadFiltered.length;
    }

    dispatch(updateUnreadNotifications(count));
  }
  // const setMessageCount = async() => {
  //   await setNotificationsCount(mongoClient.notifications.length);
  // }

  useEffect(() => {
    if(mongoClient) {
      notificationsUnreadCount();
    }
  }, [notificationsUnread]);

  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Zoukenverse</a>
      </Link>
      {admin && (
        <Link route={ROUTES.ADMIN}>
          <a className="item">Admin</a>
        </Link>
      )}

      <Menu.Menu position="right">
        <Link route={ROUTES.PROFILES}>
          <a className="item">Profiles</a>
        </Link>
        <Link route={ROUTES.PROJECTS}>
          <a className="item">Projects</a>
        </Link>
        {/* {walletConnected && (
          <Link route={ROUTES.PROJECTS}>
            <a className="item">+</a>
          </Link>
        )} */}
        {userInfo && (
          <Link route={ROUTES.NOTIFICATIONS}>
            <Menu.Item key="messages">
              Messages<Label color={"violet"}>{_.isNull(mongoClient) ? "0" : notificationsUnread}</Label>
            </Menu.Item>
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

export default NavHeader;
