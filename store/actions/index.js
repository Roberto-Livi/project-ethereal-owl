import { CONNECT_WALLET, DISCONNECT } from "./types";

export const connectWallet = (walletAddress, userInfo = null) => dispatch => {
  dispatch({ type: CONNECT_WALLET, walletAddress, userInfo });
}

export const disconnect = () => dispatch => {
  dispatch({ type: DISCONNECT });
}