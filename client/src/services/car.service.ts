import axios from 'axios';
import { Car } from '../models/Car.model';

const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

const endPoint = '/car';

export const fetchCars = () => API.get(endPoint);
export const createCar = (newCar: Car) => API.post(endPoint, newCar);
export const updateCar = (id: number, updatedCar: Car) => API.patch(`${endPoint}/${id}`, updatedCar);
export const deleteCar = (id: number) => API.patch(`${endPoint}/${id}`);