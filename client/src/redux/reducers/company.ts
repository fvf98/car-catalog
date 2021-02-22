import { CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY, SET_EDITING_COMPANY, FETCH_ALL_COMPANIES } from '../../constants/actionTypes';
import { initialCompanyModel } from '../../models/Company.model';
import { CompanyState } from '../../models/CompanyState.model';

const initialState = { companiesList: [], editing: initialCompanyModel }

export default (companies: CompanyState = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case FETCH_ALL_COMPANIES:
            return { ...companies, companiesList: action.payload.data };
        case CREATE_COMPANY:
            return { ...companies, companiesList: [...companies.companiesList, action.payload] };
        case SET_EDITING_COMPANY:
            return { ...companies, editing: action.payload }
        case UPDATE_COMPANY:
            return { ...companies, companiesList: companies.companiesList.map((company) => (company.id === action.payload.id ? action.payload : company)) };
        case DELETE_COMPANY:
            return { ...companies, companiesList: companies.companiesList.map((company) => (company.id === action.payload ? { ...company, status: !company.status } : company)) };
        default:
            return companies;
    }
}