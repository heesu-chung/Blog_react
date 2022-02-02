import { combineReducers } from "redux";
import blog from "./blogReducer";
import alert from "./alertReducer";
const rootReducer = combineReducers({
    blog,
    alert,
});

export default rootReducer;
