import { CarModel } from "./Car.model";

export interface CarState {
    carList: CarModel[];
    editing: CarModel;
}