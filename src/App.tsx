import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CreatePost from "./pages/CreatePost";
import { useDispatch } from "react-redux";
import { getHomeBlogs } from "./redux/actions/blogsAction";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/create-post" element={<CreatePost />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
