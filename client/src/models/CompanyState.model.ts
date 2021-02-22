import { CompanyModel } from "./Company.model";

export interface CompanyState {
    companiesList: CompanyModel[];
    editing: CompanyModel;
}