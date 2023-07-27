import { LoginRequest } from '../dtos/Login';
import { API_ENDPOINT } from '../utils/environment';

export const FetchLogin = (body: LoginRequest) =>
    fetch(`${API_ENDPOINT}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });

export const FetchChart = (token: string) =>
    fetch(`${API_ENDPOINT}/transaction-device/dashboard-device-chart`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            Authorization: token,
        },
    });

export const FetchTransactions = (token: string) =>
    fetch(`${API_ENDPOINT}/transaction-device/moving`, {
        method: 'POST',
        body: JSON.stringify({
            dateStart: '2023-01-11',
            dateEnd: '2023-01-11',
        }),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    });

export const FetchKioks = (token: string) =>
    fetch(`${API_ENDPOINT}/device/monitor`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            Authorization: token,
        },
    });
