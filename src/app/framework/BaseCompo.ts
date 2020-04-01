import { TaskCode } from './global';
import { AppComponent } from './../app.component';
import { JsonParser } from './ApiGenerator';
import { OnInit } from '@angular/core';
import { CommonServices } from './common.service';
import Swal from 'sweetalert2';
import { BaseResponse } from './BaseResponseModel';
import { HttpRequest, HttpGenericRequest } from './HttpRequest';
import { DownloadManager } from './DownloadManager';
import { StorageUtil } from './StorageUtil';


export class BaseComponent implements OnInit {

    // cloader: boolean = false;
    isLoader: boolean = false;
    maxSize: number = 8;
    constructor(protected commonService: CommonServices) { }

    ngOnInit() {
    }

    downloadData(req: HttpRequest) {
        const manager = new DownloadManager(this, this.commonService);
        manager.downloadData(req);
    }

    onPreExecute(taskCode: TaskCode) {
        Swal.showLoading();
        // console.log('on preExecute of basecomponent');
        // this.showLoader()
    }

    /*showLoader() {
        console.log('show loader basecompo');
        this.loader = true;
    }
    stopLoader() {
        console.log('stop loader basecompo');
        this.loader = false;
    }
*/

    onApiError(taskCode: TaskCode, error: any, req: HttpRequest) {
        Swal.close();
        if (error) {
            if (error._body) {
                const response = JsonParser.parseJsonString(JSON.parse(error._body), req.classTypeValue);
                if (response.code == '401') {
                    this.logoutUser(taskCode, response)
                } else {
                    this.onErrorReceived(taskCode, response);
                }
            } else {
                this.onServerError(taskCode, error, req);
            }
        } else {
            this.onServerError(taskCode, error, req);
        }
    }

    logoutUser(taskCode: TaskCode, response: any) {
        StorageUtil.clearAllData();
        // AppComponent.routerRef.navigate(['../login']);
        if (response && response.message) {
            alert("Session has been expired !")
        }
    }

    onServerError(taskCode: TaskCode, error: any, req: HttpRequest) {
        alert("Oops some unknown error occurred");
    }

    onErrorReceived(taskCode: TaskCode, response: any) {
        console.log(response);
        alert(response.error.message);
    }

    onResponseReceived(taskCode: TaskCode, response: any) {
        Swal.close();
        console.log(response);  
        if (response instanceof BaseResponse) {
            if (response.error) {
                return !response.error;
            }
        }

        return true;

    }


}
