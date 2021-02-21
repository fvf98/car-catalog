import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';
import { CarModel } from '../../models/Car.model';
import * as carService from '../../services/car.service';

export const getCars = () => async (dispatch: any) => {
    try {
        const { data } = await carService.fetchCars();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createCars = (car: CarModel) => async (dispatch: any) => {
    try {
        const { data } = await carService.createCar(car);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCars = (id: number, car: CarModel) => async (dispatch: any) => {
    try {
        const { data } = await carService.updateCar(id, car);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteCars = (id: number) => async (dispatch: any) => {
    try {
        await carService.deleteCar(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
