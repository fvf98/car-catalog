import axios from 'axios';
import { AuthModel } from '../models/Auth.model';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const endPoint = '/auth/login';


export const login = (auth: AuthModel) => API.post(endPoint, auth);