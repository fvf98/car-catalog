import { AuthModel } from '../models/Auth.model';
import { toast } from 'react-toastify';
import { API } from './base.service';



const endPoint = '/auth/login';

const report = (text: String) => toast.error(text);

export const login = (auth: AuthModel) => API.post(endPoint, auth)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));