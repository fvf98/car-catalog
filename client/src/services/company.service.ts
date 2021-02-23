import { CompanyModel } from '../models/Company.model';
import { toast } from 'react-toastify';
import { API } from './base.service';

const endPoint = '/company';
const report = (text: String) => toast.error(text);
const notify = (text: String) => toast.success(text);

export const fetchCompanies = () => API.get(endPoint)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const createCompany = (newCompany: CompanyModel) => API.post(endPoint, newCompany)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));

export const updateCompany = (id: number, updatedCompany: CompanyModel) => API.put(`${endPoint}/${id}`, updatedCompany)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));

export const deleteCompany = (id: number) => API.patch(`${endPoint}/${id}`)
    .then((data: any) => {
        notify(data.data.message);
        return data.data
    })
    .catch((error) => report(error.response.data.message));