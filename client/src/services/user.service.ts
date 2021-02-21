import axios from 'axios';
import { User } from '../models/User.model';

const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const endPoint = '/user';

export const fetchUsers = () => API.get(endPoint);
export const createUser = (newUser: User) => API.post(endPoint, newUser);
export const updateUser = (id: number, updatedUser: User) => API.patch(`${endPoint}/${id}`, updatedUser);
export const deleteUser = (id: number) => API.patch(`${endPoint}/${id}`);