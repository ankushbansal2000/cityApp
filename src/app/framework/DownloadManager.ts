import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { ApiGenerator, JsonParser } from './ApiGenerator';
import { CommonServices } from './common.service';
import { BaseComponent } from './BaseCompo';
import { HttpRequest } from './HttpRequest';
import { LayoutComponent } from '../layout/layout.component';
import { TaskCode } from './global';
export class DownloadManager {
    router: Router;
    protected commonService: CommonServices;
    protected c: BaseComponent;
    constructor(c: BaseComponent, service: CommonServices) {
        this.c = c;
        this.commonService = service;
    }
    downloadData(req: HttpRequest) {
        this.onPreExecute(req.taskCode);
        this.commonService.callHttpReq(req)
            .subscribe(
            res => {
                this.onResponseReceived(req.taskCode, res, req);
            },
            error => {
                console.log(error.status);
                console.log(error);
                if (error.status === 401) {
                    this.logOutUser();
                } else {
                    let errorRes = JSON.parse(error._body);
                    this.onErrorReceived(req.taskCode, JsonParser.parseJsonString(errorRes, req.classTypeValue));
                }
            },
            () => {
            }
            );
    }
    onPreExecute(taskCode: TaskCode) {
        this.c.onPreExecute(taskCode);
    }
    onErrorReceived(taskCode: TaskCode, res:any) {
            
    //    lert('error in api calling with taskcode =' + taskCode); a
        this.c.onErrorReceived(taskCode, res);


    }

    logOutUser() {
        if (LayoutComponent.routerRef !== undefined){
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('id');
            LayoutComponent.routerRef.navigate(['/login']);
        }else{
            console.log("RouterRef is null");
        }
            
    }

    onResponseReceived(taskCode: TaskCode, response: any, req: HttpRequest) {

        this.c.onResponseReceived(taskCode, this.parseJson(response, req));
    }

    parseJson(response: any, req: HttpRequest) {
        if (req.isArrayResponse) {
            return JsonParser.parseJsonArray(response, req.classTypeValue);
        } else {
            return JsonParser.parseJsonString(response, req.classTypeValue);
        }

    }
}
