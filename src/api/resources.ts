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

export const FetchChart = () =>
    fetch(`${API_ENDPOINT}/transaction-device/dashboard-device-chart`, {
        method: 'POST',
        cache: 'no-store',
    });

export const FetchTransactions = () =>
    fetch(`${API_ENDPOINT}/transaction-device/moving`, {
        method: 'POST',
        cache: 'no-store',
    });

export const FetchKioks = () =>
    fetch(`${API_ENDPOINT}/device/monitor`, {
        method: 'POST',
        cache: 'no-store',
    });
