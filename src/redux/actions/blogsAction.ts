import { Dispatch } from "react";
import { postAPI, getAPI, deleteAPI, putAPI } from "../../utils/FetchData";
import { ALERT, AlertType } from "../reducers/alertReducer";
import { GetBlogsType, GET_BLOGS } from "../types/blogTyps";

export const getHomeBlogs =
    () => async (dispatch: Dispatch<AlertType | GetBlogsType>) => {
        try {
            dispatch({ type: ALERT, payload: { loading: true } });

            const res = await getAPI("blog");

            dispatch({
                type: GET_BLOGS,
                payload: res.data,
            });
            dispatch({ type: ALERT, payload: { loading: false } });
        } catch (err: any) {
            dispatch({
                type: ALERT,
                payload: { errors: err.response.data.msg },
            });
        }
    };
