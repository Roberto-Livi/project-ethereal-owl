import {wrapper, store} from "../store/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import web3 from "../ethereum/web3";
import { connectWallet, disconnect } from "../store/actions";

const MyApp = ({ Component, pageProps }) => {

  const dispatch = useDispatch();

  const connect = async () => {
    const account = await web3.eth.getAccounts();
    if(account.length){
      dispatch(connectWallet(account[0]));
    } else {
      dispatch(disconnect());
    }
  }

  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
      connect();
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
