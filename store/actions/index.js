import { CONNECT_WALLET, DISCONNECT, UPDATE_USER_INFO } from "./types";

export const connectWallet = (walletAddress, userInfo = null) => dispatch => {
  dispatch({ type: CONNECT_WALLET, walletAddress, userInfo });
}

export const disconnect = () => dispatch => {
  dispatch({ type: DISCONNECT });
}

export const updateUserInfo = (userInfo) => dispatch => {
  dispatch({ type: UPDATE_USER_INFO, userInfo });
}