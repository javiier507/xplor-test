import { User } from './User';

export type LoginRequest = {
    email: string;
    password: string;
};

type LoginDataResponse = {
    user: User;
    token: string;
};

export type LoginResponse = {
    code: number;
    message: string;
    data: LoginDataResponse;
};
