import {
  CONNECT_WALLET,
  DISCONNECT,
  UPDATE_USER_INFO,
  UPDATE_PROFILE_CARD_ADDRESS,
  UPDATE_PROFILE_SEARCH
} from "../actions/types";

const initialState = {
  connected: false,
  walletAddress: "",
  userInfo: null,
  userProfileCard: null,
  hootBalance: 100,
  profileSearch: {
    results: [],
    resultsPresent: false
  },
  featuredProfiles: []
};

const manageData = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return { ...state, connected: true, walletAddress: action.walletAddress, userInfo: action.userInfo };
    case DISCONNECT:
      return initialState;
    case UPDATE_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case UPDATE_PROFILE_CARD_ADDRESS:
      return { ...state, userProfileCard: action.payload };
    case UPDATE_PROFILE_SEARCH:
      return { ...state, profileSearch: action.payload };
    default:
      return state;
  }
};

export default manageData;
