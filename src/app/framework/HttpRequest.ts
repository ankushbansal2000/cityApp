import { Headers } from '@angular/http';
import { ClassType } from 'class-transformer/ClassTransformer';
import { BaseResponse } from './BaseResponseModel';
import { StorageUtil, KEYS } from './StorageUtil';
import { HttpHeaders } from '@angular/common/http';

export class HttpRequest {

    url: string;
    params: any;
    method: string;
    taskCode: number;
    queryParams: HttpHeaders;
    headers: HttpHeaders;
    classTypeValue: ClassType<any> = BaseResponse;
    isArrayResponse: false;

    constructor(url: string) {
        this.url = url;
        this.method = 'GET';
        this.headers = new HttpHeaders();
        this.queryParams = new HttpHeaders();
        this.addDefaultHeaders();
        console.log(this.url);
    }
    addDefaultHeaders() {
        this.headers.append('Content-Type', 'application/json');
        let token = StorageUtil.getAuthToken();
        console.log("Token Is: "+ token);
        if (token) {
            this.headers.append('token', token);
        }
        // let userId = StorageUtil.getUserId();
        // console.log("UserId Is: "+ userId)
        // if (userId) {
        //     this.headers.append(KEYS.USER_ID, userId);
        // }
        //this.headers.append('Access-Control-Allow-Origin', '*');

    }
    removeDefaultHeaders() {
        this.headers.delete('Content-Type');
        this.headers.delete('Authorization');
        this.headers.delete('roleType');
    }
    removeHeaders(key: string) {
        this.headers.delete(key);
    }
    addHeaders(key: string, value: string) {
        this.headers.append(key, value);
    }
    setPostMethod() {
        this.method = 'POST';
    }

    setDeleteMethod() {
        this.method = 'DELETE';
    }
    setPatchMethod() {
        this.method = 'PATCH';
    }
    setPutMethod() {
        this.method = 'PUT';
    }
    addQueryParams(key: string, value: string) {
        this.queryParams.append(key, value);
    }

    getCompleteUrl() {
        if (this.queryParams !== undefined) {
            var paramString = "?";
            for (let key of this.queryParams.keys()) {
                let value = this.queryParams.get(key)
                paramString = paramString + key + "=" + value + "&";
            }
            paramString = paramString.slice(0,-1);
            this.url = this.url + paramString;
            // console.log(this.url);
        }
    }

}

export class HttpGenericRequest<T> extends HttpRequest {
    classType: ClassType<T>;
    constructor(url: string) {
        super(url);
    }
}
