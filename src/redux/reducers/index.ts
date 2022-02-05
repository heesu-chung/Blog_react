import { combineReducers } from "redux";
import blog from "./blogReducer";
import alert from "./alertReducer";
import blogs from "./blogsReducer";
import memo from "./memoReducer";

const rootReducer = combineReducers({
    blog,
    blogs,
    alert,
    memo,
});

export default rootReducer;
