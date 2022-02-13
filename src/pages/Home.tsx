import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getHomeBlogs } from "../redux/actions/blogsAction";
import { RootStore } from "../utils/Typescript";

const HomeWrapper = styled.div`
    margin-top: 20px;
`;
const BlogsWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    text-decoration: none;
    transition: 0.3s all ease-in-out;
    &:hover {
        background-color: #ddd;
    }
    .link {
        text-decoration: none;
        color: #000;
        .title {
            border-top: 1px solid #ccc;
            padding-top: 10px;
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: 1px;
        }
        .content {
            font-size: 12px;
            font-weight: 200;
            letter-spacing: 1px;
        }
    }
`;

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomeBlogs());
    }, [dispatch]);

    const { blogs } = useSelector((state: RootStore) => state);
    console.log(blogs);

    return (
        <HomeWrapper>
            {blogs.map((blog: any) => (
                <div key={blog._id}>
                    {
                        <>
                            {
                                <BlogsWrapper>
                                    <Link
                                        className="link"
                                        to={`/blog/${blog._id}`}
                                    >
                                        <div className="title">
                                            {blog.title}
                                        </div>
                                        <div
                                            className="content"
                                            dangerouslySetInnerHTML={{
                                                __html: blog.content,
                                            }}
                                        ></div>
                                    </Link>
                                </BlogsWrapper>
                            }
                        </>
                    }
                </div>
            ))}
        </HomeWrapper>
    );
};

export default Home;
