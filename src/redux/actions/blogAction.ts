import { Dispatch } from "react";
import { useSelector } from "react-redux";
import { postAPI, getAPI, deleteAPI, putAPI } from "../../utils/FetchData";
import { RootStore } from "../../utils/Typescript";
import { ALERT, AlertType } from "../reducers/alertReducer";
import { GET_BLOG, GetBlogType } from "../types/blogTyps";

export const getBlog =
    (id: string) => async (dispatch: Dispatch<AlertType | GetBlogType>) => {
        try {
            dispatch({ type: ALERT, payload: { loading: true } });

            const res = await getAPI(`blog/${id}`);
            console.log(`get response from db`);
            dispatch({
                type: GET_BLOG,
                payload: res.data,
            });
            console.log(`exec GET_BLOG`);
            dispatch({ type: ALERT, payload: { loading: false } });
        } catch (err: any) {
            dispatch({
                type: ALERT,
                payload: { errors: err.response.data.msg },
            });
        }
    };
