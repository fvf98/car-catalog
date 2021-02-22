import { CompanyModel } from '../models/Company.model';
import { toast } from 'react-toastify';
import { API } from './base.service';

const endPoint = '/company';
const report = (text: String) => toast.error(text);

export const fetchCompanies = () => API.get(endPoint)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const createCompany = (newCompany: CompanyModel) => API.post(endPoint, newCompany)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const updateCompany = (id: number, updatedCompany: CompanyModel) => API.patch(`${endPoint}/${id}`, updatedCompany)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));

export const deleteCompany = (id: number) => API.patch(`${endPoint}/${id}`)
    .then((data) => data.data)
    .catch((error) => report(error.response.data.message));