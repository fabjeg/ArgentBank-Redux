import { RESET_STATE } from "../actions/fetch.action";
import { GET_LOGIN, LOGOUT } from "../actions/index";
import { initialStates } from "./initialStates";

export default function authReducer(state = initialStates.auth, action) {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
      };
    case RESET_STATE:
      return initialStates.auth;
    default:
      return state;
  }
}
