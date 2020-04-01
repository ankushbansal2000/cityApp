import { Http, Request, RequestMethod, Response, Headers, RequestOptions } from '@angular/http';
import { TaskCode } from './global';
import { ClassType } from 'class-transformer/ClassTransformer';
import { BaseResponse } from './BaseResponseModel';
export class HttpRequest {
    url: string;
    method: string;
    params: any;
    taskCode: TaskCode;
    headers: Headers;
    queryParams: Headers;
    classTypeValue : ClassType<any> = BaseResponse;
    isArrayResponse: false;
    responseType:any;

    constructor(url: string) {
        this.url = url;
        this.method = "GET";
        this.headers = new Headers();    
        this.addHeader("Content-Type","application/json");
        this.addHeader('token',sessionStorage.getItem('token'));
        this.queryParams = new Headers();
    }
    setPostMethod() {
        this.method = "POST";
       /*  this.addHeader('token', sessionStorage.getItem('token')); */
    }
    setPutMethod() {
        this.method = "PUT";
       /*  this.addHeader('token', sessionStorage.getItem('token')); */
    }
    setDeleteMethod() {
        this.method = "DELETE";
       /*  this.addHeader('token', sessionStorage.getItem('token')); */
    }

    setPatchMethod() {
        this.method = "PATCH";
        /* this.addHeader('token', sessionStorage.getItem('token')); */
    }

    addQueryParams(key: string, value: string) {
        this.queryParams.append(key, value);
    }

    addHeader(key: string, value: string) {
        this.headers.append(key, value);
    }
    removeHeader(key: string) {
        this.headers.delete(key);
    }

    getCompleteUrl(){
        if(this.queryParams !== undefined && this.queryParams.values.length>0){
            var paramString = "";
            for(let key of this.queryParams.keys()){
                let value = this.queryParams.get(key)
                paramString = paramString + key + "=" + value + "&"
            }
            this.url = this.url + paramString;
        }
    }
}

export class HttpGenericRequest<T> extends HttpRequest{
    classType: ClassType<T>;
    constructor(url: string){
        super(url);
    }
}
