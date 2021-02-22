import { combineReducers } from 'redux';
import { CarModel } from '../../models/Car.model';
import { UserloggedModel } from '../../models/UserLogged.model';
import cars from './car';
import userLogged from './auth';

export interface State {
    cars: CarModel[],
    userLogged: UserloggedModel
}

export const rootReducer = combineReducers<State>({
    cars,
    userLogged
})

export type RootState = ReturnType<typeof rootReducer>