import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { error } from 'util';
import { element } from 'protractor';
import { URLSearchParams } from '@angular/http';
import * as global from './global';
import { HttpRequest } from './HttpRequest';
import { Logger } from './Utils/Logger';


// import * as moment from "moment";

@Injectable({
    providedIn: 'root'
})
export class CommonServices {
    method: string;
    constructor(public http: Http) { }
   

    getResponseAsFile() {
        (res => new Blob([res], { type: 'application/vnd.ms-excel' }));

    }

    throwError(error: any) {
        // if (error != "") {
        //     alert("Server Error\n" + error + "\nYou may see dummy data or nothing");
        // }
    }

    callHttpReq(req: HttpRequest) {
        const options = new RequestOptions({ headers: req.headers });
        this.printRequest(req);
        if (req.method === 'GET') {
            this.appendUrlSearchParams(options, req)
            return this.http.get(req.url, options).map(res => res.json());
        } else if (req.method === 'POST') {
            return this.http.post(req.url, req.params, options).map(res => res.json());
        } else if (req.method === 'PATCH') {
            return this.http.patch(req.url, req.params, options)
                .map(res => res.json());
        }
        else if (req.method === 'DELETE') {
            return this.http.delete(req.url, options)
                .map(res => res.json());
        }
    }

    appendUrlSearchParams(options: RequestOptions, req: HttpRequest) {
        if (req.queryParams) {
            const params = new URLSearchParams()
            req.queryParams.keys().forEach(element => {
                const value = req.queryParams.get(element);
                params.append(element, value);
                console.log(element + ", " + value);
            });
            options.params = params;
        }
    }

    printRequest(req: HttpRequest) {
        Logger.log(req.url);
        Logger.log(req.params);
        Logger.log(req.method);
    }
}
