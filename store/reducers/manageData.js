import { CONNECT_WALLET } from "../actions/types";

const initialState = {
  connected: false,
  walletAddress: "",
  hootBalance: 100
};

const manageData = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        connected: true,
        walletAddress: action.payload.walletAddress
      };
    default:
      return state;
  }
};

export default manageData;
