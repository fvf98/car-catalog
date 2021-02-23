import { CREATE_USER, UPDATE_USER, DELETE_USER, SET_EDITING_USER, FETCH_ALL_USERS } from '../../constants/actionTypes';
import { initialUserModel, UserModel } from '../../models/User.model';
import { UserState } from '../../models/UserState.model';

const initialState = { usersList: [], editing: initialUserModel }

export default (users: UserState = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            if (action.payload.id)
                return { ...users, usersList: action.payload.data.filter((user: UserModel) => user.company.id === action.payload.id) }
            return { ...users, usersList: action.payload.data };
        case CREATE_USER:
            return { ...users, usersList: [...users.usersList, action.payload] };
        case SET_EDITING_USER:
            return { ...users, editing: { ...action.payload, password: '' } }
        case UPDATE_USER:
            return { ...users, usersList: users.usersList.map((user) => (user.id === action.payload.id ? action.payload : user)) };
        case DELETE_USER:
            return { ...users, usersList: users.usersList.map((user) => (user.id === action.payload.id ? action.payload : user)) };
        default:
            return users;
    }
}