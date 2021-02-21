import { Company } from "./Company.model";

export interface User {
    id: number;
    company: Company;
    name: string;
    lastName: string;
    email: string;
    password: string;
    rol: string;
    status: boolean;
}