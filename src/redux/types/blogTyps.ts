import { Blog } from "../../utils/Typescript";

export const GET_BLOGS = "GET_BLOGS";
export const GET_BLOG = "GET_BLOG";

export interface Blogs {
    _id: string;
    name: string;
    count: string;
    blogs: Blog[];
}
export interface GetBlogsType {
    type: typeof GET_BLOGS;
    payload: Blogs[];
}

export interface GetBlogType {
    type: typeof GET_BLOG;
    payload: Blog[];
}
