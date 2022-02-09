import { GET_BLOGS } from "../types/blogTyps";

const blogsReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case GET_BLOGS: 
            return action.payload;
        default:
            return state;
    }
};

export default blogsReducer;
