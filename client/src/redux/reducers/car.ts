import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';
import { CarModel } from '../../models/Car.model';

export default (cars: CarModel[] = [], action: { type: any; payload: any; }) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...cars, action.payload];
        case UPDATE:
            return cars.map((car) => (car.id === action.payload.id ? action.payload : car));
        case DELETE:
            return cars.filter((car) => (car.id !== action.payload));
        default:
            return cars;
    }
}