import { Dispatch } from "react";
import { useSelector } from "react-redux";
import { postAPI, getAPI, deleteAPI, putAPI } from "../../utils/FetchData";
import { RootStore } from "../../utils/Typescript";
import { ALERT, AlertType } from "../reducers/alertReducer";
import { GET_BLOG, GetBlogType } from "../types/blogTyps";

export const getBlog =
    () => async (dispatch: Dispatch<AlertType | GetBlogType>) => {
        const { _id } = useSelector((state: RootStore) => state.blog);
        console.log(`get _id from blogReducer : ${_id}`);

        try {
            dispatch({ type: ALERT, payload: { loading: true } });

            const res = await getAPI("/blog/${_id}");

            dispatch({
                type: GET_BLOG,
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
