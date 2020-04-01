export class CheckUtil {

    public static isNull(T: any) {
        if (T == null) {
            return true;
        }
        return false;
    }


    public static isUndefined(T: any) {
        if (T == undefined) {
            return true;
        }
        return false;
    }


    public static isNullorUndefined(T: any) {
        if (T == undefined || T == null || T == "" ) {
            return true;
        }
        return false;
    }


    public static isNullEmptyString(T: string) {
        if (T == undefined || T == null || T.length == 0) {
            return true;
        }
        return false;
    }


    public static isEmptyList(T: any[]) {
        if (T == undefined || T == null || T.length == 0) {
            return true;
        }
        return false;
    }


    // public static isNullorUndefined(T: any) {
    //     if (T == undefined || T == null) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

}

