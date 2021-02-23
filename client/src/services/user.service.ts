import { UserModel } from '../models/User.model';
import { toast } from 'react-toastify';
import { API } from './base.service';

const endPoint = '/user';
const report = (text: String) => toast.error(text);
const notify = (text: String) => toast.success(text);

export const fetchUsers = () => API.get(endPoint)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const createUser = (newUser: UserModel) => API.post(endPoint, newUser)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));

export const updateUser = (id: number, updatedUser: UserModel) => API.put(`${endPoint}/${id}`, updatedUser)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));

export const deleteUser = (id: number) => API.patch(`${endPoint}/${id}`)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));