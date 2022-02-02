import { GET_BLOG, GET_BLOGS } from "../types/blogTyps";

const blogReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_BLOG:
            return state;
        case GET_BLOGS:
            return state;
        default:
            return state;
    }
};

export default blogReducer;
