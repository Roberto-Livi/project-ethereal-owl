import { CONNECT_WALLET, DISCONNECT } from "../actions/types";

const initialState = {
  connected: false,
  walletAddress: "",
  userInfo: null,
  hootBalance: 100
};

const manageData = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return { ...state, connected: true, walletAddress: action.walletAddress, userInfo: action.userInfo };
    case DISCONNECT:
      return initialState;
    default:
      return state;
  }
};

export default manageData;
