import { TOGGLE_COLLAPSE, RESET_STATE } from "../actions";
import { initialStates } from "./initialStates";

export default function toggleReducer(state = initialStates.collapse, action) {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case RESET_STATE:
      return initialStates.auth;
    default:
      return state;
  }
}
