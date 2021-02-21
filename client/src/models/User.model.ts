import { CompanyModel } from "./Company.model";

export interface UserModel {
    id: number;
    company: CompanyModel;
    name: string;
    lastName: string;
    email: string;
    password: string;
    rol: string;
    status: boolean;
}