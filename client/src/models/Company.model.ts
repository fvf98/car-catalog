export interface CompanyModel {
    id: number;
    name: string;
    webURL: string;
    country: string;
    street: string;
    number: string;
    cp: string;
    state: string;
    city: string;
    col: string;
    status: boolean;
}

export const initialCompanyModel: CompanyModel = {
    id: 0,
    name: '',
    webURL: '',
    country: '',
    street: '',
    number: '',
    cp: '',
    state: '',
    city: '',
    col: '',
    status: true
};