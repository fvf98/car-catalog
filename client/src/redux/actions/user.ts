import { CREATE_USER, UPDATE_USER, DELETE_USER, SET_EDITING_USER, FETCH_ALL_USERS } from '../../constants/actionTypes';
import { UserModel } from '../../models/User.model';
import * as userService from '../../services/user.service';

export const getUsers = (id?: number) => async (dispatch: any) => {
    const response = await userService.fetchUsers();

    if (response.data) {
        const { data } = response;
        dispatch({ type: FETCH_ALL_USERS, payload: { data, id } });
    }

}

export const setEditing = (user: UserModel) => async (dispatch: any) => {
    dispatch({ type: SET_EDITING_USER, payload: user });
}

export const createUser = (user: UserModel) => async (dispatch: any) => {
    const response = await userService.createUser(user);

    if (response.data) {
        const { data } = response;
        dispatch({ type: CREATE_USER, payload: data });
    }

}

export const updateUser = (id: number, user: UserModel) => async (dispatch: any) => {
    const response = await userService.updateUser(id, user);

    if (response.data) {
        const { data } = response;
        dispatch({ type: UPDATE_USER, payload: data });
    }

};

export const deleteUser = (id: number) => async (dispatch: any) => {
    const response = await userService.deleteUser(id);

    if (response.data) {
        const { data } = response;
        dispatch({ type: DELETE_USER, payload: data });
    }

};
