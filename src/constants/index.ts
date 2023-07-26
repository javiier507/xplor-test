/**
 * Generals
 */

export const BRAND_NAME = 'Xplor Demo App';

export const USER_KEY = 'user_key';
export const JWT_KEY = 'jtw_key';

export const SESSION_TIME = 1000 * 60 * 30; // miliseconds * seconds * minutes

/**
 * Users
 */

export const ROLES = {
    ADMIN: 'admin',
    CUSTOMERS: 'user',
};

export const SERVICES = {
    WEB_POS: 'web_pos',
    HKA: 'hka',
    TOP_MANAGE: 'top_manage',
};

export const SERVICE_CODES = {
    [SERVICES.WEB_POS]: '1',
    [SERVICES.HKA]: '2',
    [SERVICES.TOP_MANAGE]: '3',
};

export const USERS_COLUMNS = ['#', 'Usuario', 'Rol', 'Servicio', 'Estatus'];

// 60 000 = 1 minute
export const FETCH_STATLE_TIME = 60000 * 15;

export const FETCH_QUERY_KEYS = {
    USERS: 'users',
};

export const TAXPAYER_TYPE = {
    NATURAL: 1,
    LEGAL: 2,
};
