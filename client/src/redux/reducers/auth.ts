import { LOGIN, LOG_OUT } from '../../constants/actionTypes';
import { UserModel } from '../../models/User.model';
import { UserloggedModel } from '../../models/UserLogged.model';

const user: UserloggedModel = JSON.parse(localStorage.getItem('profile') || '{}');

const initialState = user.user
    ? { user: user.user, accessToken: user.accessToken }
    : { user: {} as UserModel, accessToken: '' };

export default (userLogged: UserloggedModel = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));

            return action.payload;
        case LOG_OUT:
            localStorage.clear();

            return { user: {} as UserModel, accessToken: '' };
        default:
            return userLogged;
    }
}