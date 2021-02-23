import { CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY, SET_EDITING_COMPANY, FETCH_ALL_COMPANIES } from '../../constants/actionTypes';
import { CompanyModel } from '../../models/Company.model';
import * as companyService from '../../services/company.service';

export const getCompanies = (id?: number) => async (dispatch: any) => {
    const response = await companyService.fetchCompanies();

    if (response.data) {
        const { data } = response;
        dispatch({ type: FETCH_ALL_COMPANIES, payload: { data, id } });
    }

}

export const setEditing = (company: CompanyModel) => async (dispatch: any) => {
    dispatch({ type: SET_EDITING_COMPANY, payload: company });
}

export const createCompany = (company: CompanyModel) => async (dispatch: any) => {
    const response = await companyService.createCompany(company);

    if (response.data) {
        const { data } = response;
        dispatch({ type: CREATE_COMPANY, payload: data });
    }

}

export const updateCompany = (id: number, company: CompanyModel) => async (dispatch: any) => {
    const response = await companyService.updateCompany(id, company);

    if (response.data) {
        const { data } = response;
        dispatch({ type: UPDATE_COMPANY, payload: data });
    }

};

export const deleteCompany = (id: number) => async (dispatch: any) => {
    const response = await companyService.deleteCompany(id);

    if (response.data) {
        const { data } = response;
        dispatch({ type: DELETE_COMPANY, payload: data });
    }

};
