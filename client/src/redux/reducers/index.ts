import { combineReducers } from 'redux';
import userLogged from './auth';
import { UserloggedModel } from '../../models/UserLogged.model';
import cars from './car';
import { CarState } from '../../models/CarState.mode';
import companies from './company';
import { CompanyState } from '../../models/CompanyState.model';

export interface State {
    cars: CarState,
    companies: CompanyState,
    userLogged: UserloggedModel
}

export const rootReducer = combineReducers<State>({
    cars,
    companies,
    userLogged
})

export type RootState = ReturnType<typeof rootReducer>