import { UserModel } from '../models/User.model';
import { toast } from 'react-toastify';
import { API } from './base.service';

const endPoint = '/user';
const report = (text: String) => toast.error(text);

export const fetchUsers = () => API.get(endPoint)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const createUser = (newUser: UserModel) => API.post(endPoint, newUser)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const updateUser = (id: number, updatedUser: UserModel) => API.patch(`${endPoint}/${id}`, updatedUser)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const deleteUser = (id: number) => API.patch(`${endPoint}/${id}`)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));