import { GenericResponse } from './Generics';
import { User } from './User';

export type LoginRequest = {
    email: string;
    password: string;
};

type LoginDataResponse = {
    user: User;
    token: string;
};

export interface LoginResponse extends GenericResponse {
    data: LoginDataResponse;
}
