import { UserModel } from "./User.model";

export interface UserloggedModel {
    user: UserModel;
    accessToken: string;
}