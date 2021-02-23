import { CompanyModel, initialCompanyModel } from "./Company.model";

export interface CarModel {
    id: number;
    name: string;
    company: CompanyModel;
    model: string;
    motor: string;
    power: string;
    transmission: string;
    cylinders: number;
    numDoors: number;
    image: string;
    colors: string[];
    price: number;
    status: boolean;
}

export const initialCarModel: CarModel = {
    id: 0,
    name: '',
    company: initialCompanyModel,
    model: '',
    motor: '',
    power: '',
    transmission: '',
    cylinders: 0,
    numDoors: 0,
    image: '',
    colors: [],
    price: 0,
    status: true
};