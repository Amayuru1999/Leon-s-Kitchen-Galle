import { combineReducers } from "redux";

//session
import { sessionReducer } from "redux-react-session";

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
