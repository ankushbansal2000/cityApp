export class AppUtil {
    static isNullOrEmpty(T: any) {
        return T === undefined || T === null || T === '';
    }

    static isNullEmpty(T: any) {
        return T === undefined || T === null;
    }

    static isListNullOrEmpty(T: any[]) {
        return T === undefined || T === null || T.length === 0;
    }



    static getSrIndex(index: number, currentPage: number, size: number) {
        let srIn = (currentPage - 1) * size + 1;
        return srIn + index;
    }

}
