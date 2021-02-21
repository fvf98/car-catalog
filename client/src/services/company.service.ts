import axios from 'axios';
import { CompanyModel } from '../models/Company.model';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const endPoint = '/company';

export const fetchCompanies = () => API.get(endPoint);
export const createCompany = (newCompany: CompanyModel) => API.post(endPoint, newCompany);
export const updateCompany = (id: number, updatedCompany: CompanyModel) => API.patch(`${endPoint}/${id}`, updatedCompany);
export const deleteCompany = (id: number) => API.patch(`${endPoint}/${id}`);