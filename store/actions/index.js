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
  UPDATE_TOKEN_BALANCE
} from "./types";
import users from "../../ethereum/users";


export const connectWallet = (walletAddress, userInfo = null) => dispatch => {
  dispatch({ type: CONNECT_WALLET, walletAddress, userInfo });
}

export const disconnect = () => dispatch => {
  dispatch({ type: DISCONNECT });
}

export const updateUserInfo = (user) => async dispatch => {
  dispatch({ type: UPDATE_USER_INFO, userInfo: user });
}

export const updateUserProfileCard = (address) => async dispatch => {
  const user = await users.methods.users(address).call();
  dispatch({ type: UPDATE_PROFILE_CARD_ADDRESS, payload: user });
}

export const updateProfileSearchRequest = () => dispatch => {
  dispatch({ type: UPDATE_PROFILE_SEARCH_REQUEST });
}

export const updateProfileSearch = (results) => dispatch => {
  const searchResults = { results, loading: false}
  dispatch({ type: UPDATE_PROFILE_SEARCH, payload: searchResults });
}

export const getAdminRole = () => dispatch => {
  dispatch({ type: GET_ADMIN_ROLE });
}

export const retrieveProjects = (projects) => dispatch => {
  dispatch({ type: GET_PROJECTS, payload: projects });
}

export const uploadMongoNotifications = (data) => dispatch => {
  dispatch({ type: UPLOAD_MONGO_NOTIFICATIONS, payload: data });
}

export const updateUnreadNotifications = (amountUnread) => dispatch => {
  dispatch({ type: UPDATE_UNREAD_NOTIFICATIONS_COUNT, payload: amountUnread });
}

export const updateCurrentProject = (project) => dispatch => {
  dispatch({ type: UPDATE_CURRENT_PROJECT, payload: project });
}

export const updateRecruitRequests = (requests)  => dispatch => {
  dispatch({ type: UPDATE_RECRUIT_REQUESTS, payload: requests });
}

export const updateTokenBalance = (balance) => dispatch => {
  dispatch({ type: UPDATE_TOKEN_BALANCE, payload: balance });
}