import { CompanyModel } from "./Company.model";

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