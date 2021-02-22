import axios from "axios";
import { UserloggedModel } from "../models/UserLogged.model";

export const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    const user: UserloggedModel = JSON.parse(localStorage.getItem('profile') || '{}');

    if (user) {
        req.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return req;
});