import React, { useEffect } from "react";
import { wrapper, store } from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import web3 from "../ethereum/web3";
import {
  connectWallet,
  disconnect,
  getAdminRole,
  uploadMongoNotifications,
  retrieveProjects,
  updateTokenBalance,
  approveToken
} from "../store/actions";
import users from "../ethereum/users";
import { isAdmin, getUsersProjects } from "../helpers/users/users";
import _ from "lodash";
import { getUsersNotifications } from "../helpers/mongodb/NotificationCallCenter";
import {
  getTokenBalance,
  userApprovedTokenContract
} from "../helpers/proj-token/proj-token";
import { SocketContext } from "../components/utilities/socket";
import socketIOClient from "socket.io-client";
import "../styles/global.css";

const endpoint = "http://localhost:3001";
const socket = socketIOClient(endpoint);


const MyApp = ({ Component, pageProps }) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const connect = async () => {
    const account = await web3.eth.getAccounts();
    const user =
      account.length && (await users.methods.users(account[0]).call());
    const adminAccess = await isAdmin(account[0]);
    if (account.length && user["codename"] !== "") {
      if (adminAccess) {
        dispatch(getAdminRole());
      }
      const projects = await getUsersProjects(account[0]);
      if (projects.length) {
        dispatch(retrieveProjects(projects));
      }
      dispatch(connectWallet(account[0], user));
      uploadMongoNotifs(user);
    } else if (account.length) {
      if (adminAccess) {
        dispatch(getAdminRole());
      }
      dispatch(connectWallet(account[0]));
    } else {
      dispatch(disconnect());
    }

    const tokenBalance = await getTokenBalance();
    const tokenApproved = await userApprovedTokenContract(account[0]);
    if (tokenApproved) {
      dispatch(approveToken());
    }
    dispatch(updateTokenBalance(tokenBalance));
  };

  const uploadMongoNotifs = async (user) => {
    if (user.userAddress && user.mongoNotificationsId !== "0") {
      const resp = await getUsersNotifications(user.mongoNotificationsId);
      if (resp.successfulResponse) {
        dispatch(uploadMongoNotifications(resp.data));
      }
    }
  };

  const isUserConnected = async () => {
    if (_.isEmpty(walletAddress)) {
      const account = await web3.eth.getAccounts();
      if (account[0]) {
        connect();
      }
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        connect();
      });
      window.ethereum.on("accountsChanged", () => {
        connect();
      });
    }
  }, []);

  useEffect(() => {
    isUserConnected();
  }, []);

  return (
    <>
      <SocketContext.Provider value={socket}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SocketContext.Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
