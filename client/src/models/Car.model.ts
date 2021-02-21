import { CompanyModel } from "./Company.model";

export interface CarModel {
    id: number;
    name: string;
    company: CompanyModel;
    model: string;
    motor: string;
    power: string;
    transmision: string;
    cylinders: number;
    numDoors: number;
    image: string;
    colors: string[];
    price: number;
    status: boolean;
}