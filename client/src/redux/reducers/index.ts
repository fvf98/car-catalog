import { combineReducers } from 'redux';
import userLogged from './auth';
import { UserloggedModel } from '../../models/UserLogged.model';
import cars from './car';
import { CarState } from '../../models/CarState.mode';
import companies from './company';
import { CompanyState } from '../../models/CompanyState.model';
import users from './user';
import { UserState } from '../../models/UserState.model';

export interface State {
    cars: CarState,
    companies: CompanyState,
    userLogged: UserloggedModel,
    users: UserState
}

export const rootReducer = combineReducers<State>({
    cars,
    companies,
    userLogged,
    users
})

export type RootState = ReturnType<typeof rootReducer>