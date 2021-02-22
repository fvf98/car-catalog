import axios from 'axios';
import { AuthModel } from '../models/Auth.model';
import { UserloggedModel } from '../models/UserLogged.model';
import { toast } from 'react-toastify';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    const user: UserloggedModel = JSON.parse(localStorage.getItem('profile') || '{}');

    if (user) {
        req.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return req;
});

const endPoint = '/auth/login';

const report = (text: String) => toast.error(text);

export const login = (auth: AuthModel) => API.post(endPoint, auth)
    .then((data) => { return data.data })
    .catch((error) => report(error.response.data.message));