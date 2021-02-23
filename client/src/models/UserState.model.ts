import { UserModel } from "./User.model";

export interface UserState {
    usersList: UserModel[];
    editing: UserModel;
}