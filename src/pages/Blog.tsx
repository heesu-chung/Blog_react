import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../redux/actions/blogAction";
import { GET_BLOG } from "../redux/types/blogTyps";
import { RootStore } from "../utils/Typescript";

const Blog = () => {
    const dispatch = useDispatch();
    const id: any = useParams().id;
    const [post, setPost] = useState("");

    const { blog } = useSelector((state: RootStore) => state);
    const { blogs } = useSelector((state: RootStore) => state);

    useEffect(() => {
        console.log(`request from client`);
        dispatch(getBlog(id));
        console.log(`get response from server`);
        console.log(blog);
        // setPost(blog);
        // console.log(blog);
    }, [dispatch]);

    return <div>{post}</div>;
};

export default Blog;
