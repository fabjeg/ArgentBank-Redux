import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";
import accountReducer from "./acc.reducer";
import toggleReducer from "./toggle.reducer";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  acc: accountReducer,
  collapse: toggleReducer,
});
