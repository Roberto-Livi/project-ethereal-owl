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
  UPDATE_UNREAD_NOTIFICATIONS_COUNT,
  UPDATE_CURRENT_PROJECT,
  UPDATE_RECRUIT_REQUESTS,
  UPDATE_TOKEN_BALANCE,
  APPROVE_TOKEN,
  UPDATE_PROJECT_SEARCH_REQUEST,
  UPDATE_PROJECT_SEARCH,
  SET_CHAT_ROOMS,
  SET_SCRUM_DATA,
  UPDATE_BACKLOG
} from "../actions/types";

const initialState = {
  admin: false,
  connected: false,
  walletAddress: "",
  userInfo: null,
  userProfileCard: null,
  tokenBalance: 0,
  projects: [],
  currentProject: {
    project: [],
    members: [],
    isMember: false,
    requests: [],
    loaded: false
  },
  profileSearch: {
    results: [],
    loading: false
  },
  projectSearch: {
    results: [],
    loading: false
  },
  recruitRequests: [],
  mongoNotifications: null,
  notificationsUnread: 0,
  approvedToken: false,
  chatRooms: [],
  scrumData: null
};

const manageData = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        connected: true,
        walletAddress: action.walletAddress,
        userInfo: action.userInfo,
      };
    case DISCONNECT:
      return initialState;
    case GET_ADMIN_ROLE:
      return { ...state, admin: true };
    case UPDATE_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case UPDATE_TOKEN_BALANCE:
      return { ...state, tokenBalance: action.payload };
    case UPDATE_PROFILE_CARD_ADDRESS:
      return { ...state, userProfileCard: action.payload };
    case UPDATE_PROFILE_SEARCH_REQUEST:
      return { ...state, profileSearch: { results: [], loading: true } };
    case UPDATE_PROFILE_SEARCH:
      return { ...state, profileSearch: action.payload };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case UPLOAD_MONGO_NOTIFICATIONS:
      return { ...state, mongoNotifications: action.payload };
    case UPDATE_UNREAD_NOTIFICATIONS_COUNT:
      return { ...state, notificationsUnread: action.payload };
    case UPDATE_CURRENT_PROJECT:
      return { ...state, currentProject: action.payload };
    case UPDATE_RECRUIT_REQUESTS:
      return { ...state, recruitRequests: action.payload };
    case APPROVE_TOKEN:
      return { ...state, approvedToken: action.payload };
    case UPDATE_PROJECT_SEARCH_REQUEST:
      return { ...state, projectSearch: { results: [], loading: true } };
    case UPDATE_PROJECT_SEARCH:
      return { ...state, projectSearch: action.payload };
    case SET_CHAT_ROOMS:
      return { ...state, chatRooms: action.payload };
    case SET_SCRUM_DATA:
      return { ...state, scrumData: action.payload };
    case UPDATE_BACKLOG:
      return { ...state, scrumData: action.payload };
    default:
      return state;
  }
};

export default manageData;
