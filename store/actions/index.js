import {
  CONNECT_WALLET,
  DISCONNECT,
  UPDATE_USER_INFO,
  UPDATE_PROFILE_CARD_ADDRESS,
  UPDATE_PROFILE_SEARCH,
  GET_ADMIN_ROLE,
  UPDATE_PROFILE_SEARCH_REQUEST,
  GET_PROJECTS
} from "./types";
import users from "../../ethereum/users";


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