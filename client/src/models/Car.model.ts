import { Company } from "./Company.model";

export interface Car {
    id: number;
    name: string;
    company: Company;
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