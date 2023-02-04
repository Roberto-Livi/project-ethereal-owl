import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Button, Label } from "semantic-ui-react";
import { Link } from "../../routes";
import { ROUTES } from "./constants";
import _ from "lodash";
import { updateUnreadNotifications, approveToken } from "../../store/actions";
import { approveTokenContract } from "../../helpers/proj-token/proj-token";

const NavHeader = () => {

  const dispatch = useDispatch();

  const [connecting, setConnecting] = useState(false);
  const [approvingToken, setApprovingToken] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const admin = useSelector((state) => state.manageData.admin);
  const walletConnected = useSelector((state) => state.manageData.connected);
  const userInfo = useSelector((state) => state.manageData.userInfo);
  const notificationsUnread = useSelector((state) => state.manageData.notificationsUnread);
  const mongoClient = useSelector((state) => state.manageData.mongoNotifications);
  const approvedToken = useSelector((state) => state.manageData.approvedToken);

  const onClickConnect = async () => {
    try {
      setConnecting(true);
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (err) {
      console.error(err);
    }
    setConnecting(false);
  };

  const onClickApproveToken = async () => {
    try {
      setApprovingToken(true);
      if (walletAddress) {
        const resp = await approveTokenContract();
        if(resp) {
          dispatch(approveToken());
        }
      }
    } catch(err) {
      console.log(err)
    }
    setApprovingToken(false);
  }

  const notificationsUnreadCount = () => {
    let count = 0;

    if(mongoClient) {
      const unreadFiltered = mongoClient.notifications.filter((n) => _.isEqual(n.seen, false));
      count = unreadFiltered.length;
    }

    dispatch(updateUnreadNotifications(count));
  }

  useEffect(() => {
    if(mongoClient) {
      notificationsUnreadCount();
    }
  }, [mongoClient]);

  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Ignitionist</a>
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
              Messages
              <Label color={"violet"}>
                {_.isNull(mongoClient) ? "0" : notificationsUnread}
              </Label>
            </Menu.Item>
          </Link>
        )}
        <Link route={ROUTES.LOTTERY}>
          <Menu.Item key="lottery">
            Lottery
          </Menu.Item>
        </Link>
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
        {!approvedToken && (
          <Menu.Item>
            <Button
              color="violet"
              onClick={onClickApproveToken}
              loading={approvingToken}
            >
              Approve Token
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default NavHeader;
