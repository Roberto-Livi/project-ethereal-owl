import {wrapper, store} from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import web3 from "../ethereum/web3";
import { connectWallet, disconnect, getAdminRole, appLoadedAction } from "../store/actions";
import users from "../ethereum/users";
import { isAdmin } from "../helpers/users/users";
import _ from "lodash";
import { getUsersNotifications } from "../helpers/mongodb/NotificationCallCenter";


const MyApp = ({ Component, pageProps }) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const connect = async () => {
    const account = await web3.eth.getAccounts();
    const user = account.length && await users.methods.users(account[0]).call();
    const adminAccess = await isAdmin(account[0]);
    if(account.length && user["codename"] !== "") {
      if(adminAccess){
        dispatch(getAdminRole());
      }
      dispatch(connectWallet(account[0], user));
    } else if(account.length) {
      if (adminAccess) {
        dispatch(getAdminRole());
      }
      dispatch(connectWallet(account[0]));
    } else {
      dispatch(disconnect());
    }
  }

  const isUserConnected = async() => {
    if(_.isEmpty(walletAddress)) {
      const account = await web3.eth.getAccounts();
      if(account[0]){
        connect();
      }
    }
    appLoaded();
    // if(walletAddress) {
    //   await getUsersNotifications(walletAddress);
    // }
    // await getUsersNotifications(walletAddress);
  }

  const appLoaded = () => {
    dispatch(appLoadedAction());
  }

  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        connect();
      })
      window.ethereum.on('accountsChanged', () => {
        connect();
      })
    }
  }, []);

  useEffect(() => {
    isUserConnected();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
