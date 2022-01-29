import { ChangeEvent, FormEvent } from "react";
import rootReducer from "../redux/reducers/index";

export type InputChange = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export type RootStore = ReturnType<typeof rootReducer>;

export interface UserLogin {}

export interface User {}

export interface Blog {
    _id?: string;
    user: string | User;
    title: string;
    content: string;
    desc: string;
    createdAt: string;
}
