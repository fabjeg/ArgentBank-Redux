import { ACCOUNT_USER, RESET_STATE } from "../actions/index";
import { initialStates } from "./initialStates";

export default function accountReducer(state = initialStates.account, action) {
  switch (action.type) {
    case ACCOUNT_USER:
      return {
        ...state,
        accounts: action.payload,
      };

    case RESET_STATE:
      return initialStates.account;
    default:
      return state;
  }
}
