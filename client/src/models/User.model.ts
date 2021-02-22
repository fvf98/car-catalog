import { CompanyModel, initialCompanyModel } from "./Company.model";

export interface UserModel {
    id: number;
    company: CompanyModel;
    name: string;
    lastName: string;
    email: string;
    password: string;
    roles: string;
    status: boolean;
}

export const initialUserModel: UserModel = {
    id: 0,
    company: initialCompanyModel,
    name: '',
    lastName: '',
    email: '',
    password: '',
    roles: '',
    status: true
};