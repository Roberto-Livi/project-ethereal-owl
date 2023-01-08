import {
  CONNECT_WALLET,
  DISCONNECT,
  UPDATE_USER_INFO,
  UPDATE_PROFILE_CARD_ADDRESS,
  UPDATE_PROFILE_SEARCH,
  GET_ADMIN_ROLE,
  UPDATE_PROFILE_SEARCH_REQUEST,
  GET_PROJECTS,
  UPLOAD_MONGO_NOTIFICATIONS,
  UPDATE_UNREAD_NOTIFICATIONS_COUNT
} from "../actions/types";

const initialState = {
  admin: false,
  connected: false,
  walletAddress: "",
  userInfo: null,
  userProfileCard: null,
  hootBalance: 100,
  projects: [],
  profileSearch: {
    results: [],
    loading: false
  },
  mongoNotifications: null,
  notificationsUnread: 0
};

const manageData = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return { ...state, connected: true, walletAddress: action.walletAddress, userInfo: action.userInfo };
    case DISCONNECT:
      return initialState;
    case GET_ADMIN_ROLE:
      return { ...state, admin: true };
    case UPDATE_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case UPDATE_PROFILE_CARD_ADDRESS:
      return { ...state, userProfileCard: action.payload };
    case UPDATE_PROFILE_SEARCH_REQUEST:
      return { ...state, profileSearch: {results: [], loading: true}};
    case UPDATE_PROFILE_SEARCH:
      return { ...state, profileSearch: action.payload };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case UPLOAD_MONGO_NOTIFICATIONS:
      return { ...state, mongoNotifications: action.payload };
    case UPDATE_UNREAD_NOTIFICATIONS_COUNT:
      return { ...state, notificationsUnread: action.payload };
    default:
      return state;
  }
};

export default manageData;
