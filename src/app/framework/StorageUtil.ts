
export class StorageUtil {

    static getAuthToken() {
        return this.getItem(KEYS.TOKEN);
    }

    static saveToken(token: string) {
        this.setItem(KEYS.TOKEN, token);
    }

    static getEmpId() {
        return 1;
    }

    static logoutUser() {
        this.clearAllData();
    }

    static clearAllData() {
        sessionStorage.clear();
        localStorage.clear()
    }

    static setItem(key: string, value: string) {
        sessionStorage.setItem(key, value)
    }
    static getItem(key: string) {
        return sessionStorage.getItem(key)
    }
    static removeItem(key: string) {
        return sessionStorage.removeItem(key)
    }
}

export enum KEYS {
    TOKEN = 'token',
    USER_NAME = 'userName',
    USER_ID = 'id',
    ENQUIRY_ID = 'enq_id',
    EMAIL_ID = 'emailId',
    MOBILE_NUMBER = 'mobileNumber',
    CLIENT_DATA = 'clientData',
    CLIENT_ID = 'clientId',
    CLIENT_SEARCH = 'clientSearch',
    QUOTATION_DATA = 'quotationData',
    PDF_DATA = 'PDF_DATA',
    PDF_URL = 'PDF_URL',
    USER_PERMISSIONS = "userPermissions",
}
