import { CONNECT_WALLET, DISCONNECT } from "./types";

export const connectWallet = (walletAddress) => dispatch => {
  dispatch({ type: CONNECT_WALLET, payload: walletAddress });
}

export const disconnect = () => dispatch => {
  dispatch({ type: DISCONNECT });
}