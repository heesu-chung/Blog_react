import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    position: fixed;
    /* border: 1px solid #ccc; */

    display: flex;

    padding: 10px 10px;
    .btns {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        .logo {
            font-size: 18px;
            font-weight: 600;
            padding-top: 13px;
            letter-spacing: 2px;
            .link-logo {
                color: #000;
                text-decoration: none;
            }
            cursor: pointer;
        }
        .btn {
            margin-top: 10px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: #eeeded;
            /* background: linear-gradient(145deg, #d6d5d5, #fffefe); */
            box-shadow: 6px 6px 12px #cac9c9, -6px -6px 12px #ffffff;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 0.3s all ease-in-out;

            /* &:hover {
                background: linear-gradient(145deg, #d6d5d5, #fffefe);
            } */

            @media (min-width: 1200px) {
                display: none;
            }
            @media (min-width: 800px) {
                display: none;
            }
        }
    }
    .btn-create {
        position: fixed;
        top: 94%;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #eeeded;
        /* background: linear-gradient(145deg, #d6d5d5, #fffefe); */
        box-shadow: 6px 6px 12px #cac9c9, -6px -6px 12px #ffffff;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s all ease-in-out;

        /* &:hover {
            background: linear-gradient(145deg, #d6d5d5, #fffefe);
        } */

        @media (min-width: 1200px) {
            display: none;
        }
        @media (min-width: 800px) {
            display: none;
        }
    }
    .icon {
        opacity: 30%;
    }
`;

const Blank = styled.div`
    width: 100%;
    height: 50px;
`;

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <div className="btns">
                    <div className="btn btn-menu">
                        <FaBars className="icon" />
                    </div>
                    <div className="logo">
                        <Link to="/" className="link-logo">
                            PIN
                        </Link>
                    </div>
                    <div className="btn btn-profile">
                        <FaUserAlt className="icon" />
                    </div>
                </div>
                <div className="btn btn-create">
                    <Link to="create-post" className="create-btn">
                        <FaPlus className="icon" />
                    </Link>
                </div>
            </HeaderWrapper>
            <Blank></Blank>
        </>
    );
};

export default Header;
