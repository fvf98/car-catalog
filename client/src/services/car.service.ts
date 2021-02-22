import { CarModel } from '../models/Car.model';
import { toast } from 'react-toastify';
import { API } from './base.service';

const endPoint = '/car';
const report = (text: String) => toast.error(text);

export const fetchCars = () => API.get(endPoint)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const createCar = (newCar: CarModel) => API.post(endPoint, newCar)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const updateCar = (id: number, updatedCar: CarModel) => API.put(`${endPoint}/${id}`, updatedCar)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const deleteCar = (id: number) => API.patch(`${endPoint}/${id}`)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));