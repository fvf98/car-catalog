import { FETCH_ALL_CARS, CREATE_CAR, UPDATE_CAR, DELETE_CAR, SET_EDITING_CAR, FETCH_FILTER_CARS } from '../../constants/actionTypes';
import { CarModel } from '../../models/Car.model';
import * as carService from '../../services/car.service';

export const getCars = (id?: number, all?: boolean) => async (dispatch: any) => {
    const response = await carService.fetchCars();

    if (response.data) {
        const { data } = response;
        dispatch({ type: FETCH_ALL_CARS, payload: { data, id, all } });
    }

}

export const setEditing = (car: CarModel) => async (dispatch: any) => {
    dispatch({ type: SET_EDITING_CAR, payload: car });
}

export const createCar = (car: CarModel) => async (dispatch: any) => {
    const response = await carService.createCar(car);

    if (response.data) {
        const { data } = response;
        dispatch({ type: CREATE_CAR, payload: data });
    }

}

export const updateCar = (id: number, car: CarModel) => async (dispatch: any) => {
    const response = await carService.updateCar(id, car);

    if (response.data) {
        const { data } = response;
        dispatch({ type: UPDATE_CAR, payload: data });
    }

};

export const deleteCar = (id: number) => async (dispatch: any) => {
    await carService.deleteCar(id);
    dispatch({ type: DELETE_CAR, payload: id });

};

export const filterCars = (value: string) => async (dispatch: any) => {
    const response = await carService.fetchCars();

    if (response.data) {
        const { data } = response;
        dispatch({ type: FETCH_FILTER_CARS, payload: { data, value } });
    }
}

