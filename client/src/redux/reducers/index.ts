import { combineReducers } from 'redux';
import { CarModel } from '../../models/Car.model';
import cars from './car'

export interface State {
    cars: CarModel[]
}

export const rootReducer = combineReducers<State>({
    cars,
})

export type RootState = ReturnType<typeof rootReducer>