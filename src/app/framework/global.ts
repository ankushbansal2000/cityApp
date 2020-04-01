// test server
// export const API_BASE_URL = "http://103.21.187.3:8095/tripleplay/";

//Live server
export const API_BASE_URL = "http://174.138.121.157:8888/atyourhome/api/";

export const GET_LOGIN_URL = API_BASE_URL + "user/login";


// CITY

export const GET_ALL_CITY = API_BASE_URL + "city/all";

export const POST_CITY = API_BASE_URL + "city";

export const DEL_CITY = API_BASE_URL + "city";

export const UPDATE_CITY = API_BASE_URL + "city";

export const GET_DATA_BY_ID_CITY = API_BASE_URL + "city";

// Master Categories

export const GET_ALL_MASTER_CATEGORIES = API_BASE_URL + "masterCategories/all";

export const POST_MASTER_CATEGORIES = API_BASE_URL + "masterCategories";

export const DEL_MASTER_CATEGORIES = API_BASE_URL + "masterCategories";

export const UPDATE_MASTER_CATEGORIES = API_BASE_URL + "masterCategories";

export const GET_DATA_BY_ID_MASTER_CATEGORIES = API_BASE_URL + "masterCategories";

// Vendor

export const GET_ALL_VENDOR = API_BASE_URL + "vendor/all";

export const POST_VENDOR = API_BASE_URL + "vendor";

export const DEL_VENDOR = API_BASE_URL + "vendor";

export const UPDATE_VENDOR = API_BASE_URL + "vendor";

export const GET_DATA_BY_ID_VENDOR = API_BASE_URL + "vendor";

export enum TaskCode {
    GET_LOGIN_URL,
    GET_ALL_CITY,
    POST_CITY,
    DEL_CITY,
    UPDATE_CITY,
    GET_DATA_BY_ID_CITY,
    GET_ALL_MASTER_CATEGORIES,
    POST_MASTER_CATEGORIES,
    DEL_MASTER_CATEGORIES,
    UPDATE_MASTER_CATEGORIES,
    GET_DATA_BY_ID_MASTER_CATEGORIES,
    GET_ALL_VENDOR,
    POST_VENDOR,
    DEL_VENDOR,
    UPDATE_VENDOR,
    GET_DATA_BY_ID_VENDOR
}
