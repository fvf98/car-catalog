import axios from 'axios';
import { CarModel } from '../models/Car.model';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const endPoint = '/car';

export const fetchCars = () => API.get(endPoint).then(data => { return data.data });
export const createCar = (newCar: CarModel) => API.post(endPoint, newCar);
export const updateCar = (id: number, updatedCar: CarModel) => API.patch(`${endPoint}/${id}`, updatedCar);
export const deleteCar = (id: number) => API.patch(`${endPoint}/${id}`);