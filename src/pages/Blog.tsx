import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../redux/actions/blogAction";
import { GET_BLOG } from "../redux/types/blogTyps";
import { RootStore } from "../utils/Typescript";

const Blog = () => {
    const dispatch = useDispatch();
    const id = useParams().slug;
    const { blog } = useSelector((state: RootStore) => state);
    console.log(id);

    return <div>blog</div>;
};

export default Blog;
