import { LOGIN, LOG_OUT } from '../../constants/actionTypes';
import * as authService from '../../services/auth.service';
import { AuthModel } from '../../models/Auth.model';

export const login = (auth: AuthModel) => async (dispatch: any) => {
    try {
        const { data } = await authService.login(auth);
        dispatch({ type: LOGIN, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const logOut = () => async (dispatch: any) => {
    try {
        dispatch({ type: LOG_OUT });
    } catch (error) {
        console.log(error);
    }
};