import { FETCH_ALL_CARS, CREATE_CAR, UPDATE_CAR, DELETE_CAR, SET_EDITING_CAR } from '../../constants/actionTypes';
import { CarModel, initialCarModel } from '../../models/Car.model';
import { CarState } from '../../models/CarState.mode';

const initialState = { carList: [], editing: initialCarModel }

export default (cars: CarState = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case FETCH_ALL_CARS:
            if (action.payload.id)
                return { ...cars, carList: action.payload.data.filter((car: CarModel) => car.company.id === action.payload.id) }
            else if (action.payload.all)
                return { ...cars, carList: action.payload.data };
            else
                return { ...cars, carList: action.payload.data.filter((car: CarModel) => car.status === true) };
        case CREATE_CAR:
            return { ...cars, carList: [...cars.carList, action.payload] };
        case SET_EDITING_CAR:
            return { ...cars, editing: action.payload }
        case UPDATE_CAR:
            return { ...cars, carList: cars.carList.map((car) => (car.id === action.payload.id ? action.payload : car)) };
        case DELETE_CAR:
            return { ...cars, carList: cars.carList.map((car) => (car.id === action.payload ? { ...car, status: !car.status } : car)) };
        default:
            return cars;
    }
}