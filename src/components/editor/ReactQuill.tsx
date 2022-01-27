import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 50px;
    width: 800px;

    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 800px;
    }

    @media (max-width: 800px) {
        width: 95%;
        margin: 0 auto;
    }
    input {
        width: 100%;
        margin-bottom: 30px;
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #ccc;
        background: #eeeded;
        &:focus {
            outline: 1px solid #ccc;
        }
    }
    .editor {
        height: 400px;
    }
`;

const Btn = styled.div`
    button {
        letter-spacing: 1px;
        border: 1px solid #ccc;
        font-size: 14px;
        padding: 10px 20px;
        background-color: #eeeded;
        margin: 30px 0;
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
    display: flex;
    justify-content: center;
`;

export const Editor = () => {
    // for DOM Element
    let init = {
        _id: "",
        user: "",
        title: "",
        content: "",
        description: "",
        thumbnail: "",
        category: "",
        createdAt: new Date().toISOString(),
    };

    // const dispatch = useDispatch();
    // const changedState = useSelector((state) => state);

    const QuillRef = useRef<ReactQuill>();
    // set Contents
    const [contents, setContents] = useState("");
    const [title, setTitle] = useState("");

    const onSubmit = async (e: any) => {
        init = {
            ...init,
            title: title,
            content: contents,
            createdAt: new Date().toISOString(),
        };

        try {
            const res = await axios.post(`/api/blog`, init);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const imageHandler = () => {
        //create input element for file upload
        const input = document.createElement("input");
        const formData = new FormData();
        let url = "";

        // setAttribute ([attribute.name], [attribute.value])
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        // fn when file put into input element
        input.onchange = async () => {
            const file = input.files;
            if (file !== null) {
                formData.append("image", file[0]);
            }

            //from backend server - get Image
            // try {
            //     // get data which is formData type
            //     const res = ;

            //     // get image url
            //     url = res.data.url;

            //     // get cursor location - put image tag
            //     // DOM data needed - use useRef
            //     const range = QuillRef.current?.getEditor().getSelection()?.index;
            //     if(range !== null && range !== undefined) {
            //         let quill = QuillRef.current?.getEditor();

            //         quill?.setSelection(range, 1);

            //         quill?.clipboard.dangerouslyPasteHTML(
            //             range,
            //             `<img src=${url} alt="insert img tag">`
            //         )
            //     }

            //     return { ...res, success: true }
            // } catch (error) {
            //     const err = error as AxiosError
            //     return { ...err.response, success: false}
            // }
        };
    };
    // module options
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                        { size: ["small", false, "large", "huge"] },
                        { color: [] },
                    ],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image"],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );
    return (
        <>
            <Wrapper>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />
                <ReactQuill
                    className="editor"
                    ref={(element) => {
                        if (element !== null) {
                            QuillRef.current = element;
                        }
                    }}
                    value={contents}
                    onChange={setContents}
                    modules={modules}
                    theme="snow"
                    placeholder="내용을 입력해주세요."
                />
            </Wrapper>
            <Btn>
                <button onClick={onSubmit}>Submit</button>
            </Btn>
        </>
    );
};
