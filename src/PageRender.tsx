import React from "react";
import { useParams } from "react-router-dom";
// import NotFound from "./components/global/NotFound";
// import { Params } from "./utils/Typescript";

const generatePage = (name: string) => {
    const component = () => require(`./pages/${name}`).default;

    try {
        return React.createElement(component());
    } catch (err) {
        console.log(`PageRender Error`);
        console.log(err);
        // return <NotFound />;
        return;
    }
};

const PageRender = () => {
    const { page, slug } = useParams();
    console.log(`PAGE_RENDER | page | ` + page);
    console.log(`PAGE_RENDER | slug | ` + slug);
    let name = "";
    if (page) {
        name = slug ? `${page}` : `${page}`;
    }
    console.log(`Page_RENDER | name | ` + name);
    if (name === "home") name = "";

    return generatePage(name);
};

export default PageRender;
