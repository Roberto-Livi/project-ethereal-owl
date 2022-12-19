import {wrapper, store} from "../store/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import web3 from "../ethereum/web3";
import { connectWallet, disconnect, getAdminRole } from "../store/actions";
import users from "../ethereum/users";
import { isAdmin } from "../helpers/users/users";


const MyApp = ({ Component, pageProps }) => {

  const dispatch = useDispatch();

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

  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        connect();
      })
      window.ethereum.on('accountsChanged', () => {
        connect();
      })
    }
  })

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
