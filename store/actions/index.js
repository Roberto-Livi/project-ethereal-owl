import { CONNECT_WALLET } from "./types";

export const connectWallet = (walletAddress) => dispatch => {
  dispatch({ type: CONNECT_WALLET, payload: walletAddress[0] });
};