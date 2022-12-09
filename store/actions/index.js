import { CONNECT_WALLET, DISCONNECT, UPDATE_USER_INFO } from "./types";

export const connectWallet = (walletAddress, userInfo = null) => dispatch => {
  dispatch({ type: CONNECT_WALLET, walletAddress, userInfo });
}

export const disconnect = () => dispatch => {
  dispatch({ type: DISCONNECT });
}

export const updateUserInfo = (user) => async dispatch => {
  const userData = await user;
  dispatch({ type: UPDATE_USER_INFO, userInfo: {
    codename: userData.codename,
    profession: userData.profession,
    description: userData.description
  } });
}