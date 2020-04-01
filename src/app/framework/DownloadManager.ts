import { TaskCode } from './global';
import { HttpRequest, HttpGenericRequest } from "./HttpRequest";
import { CommonService } from "./common.service";
import { BaseComponent } from "./BaseCompo";
import { Http } from "@angular/http";
import { ApiGenerator, JsonParser} from "./ApiGenerator";


export class DownloadManager {
  protected commonService: CommonService;
  protected c: BaseComponent;
  constructor(c: BaseComponent, service: CommonService) {
    this.c = c;
    this.commonService = service;
  }
  downloadData(req: HttpRequest) {
    this.onPreExecute(req.taskCode);
    this.commonService.callHttpReq(req).subscribe(
      res => {
        console.log(res);
        // let response = JSON.parse(res[' body']);
        // let response=JSON.parse(res[])
      
        this.onResponseReceived(req.taskCode, res, req);
      },
      error => {
        this.onErrorReceived(req.taskCode, error, req);
      },
      () => {}
    );
  }
  onPreExecute(taskCode: TaskCode) {
    this.c.onPreExecute(taskCode);
  }
  onErrorReceived(taskCode: TaskCode, error: any, req:HttpRequest) {
   this.c.onApiError(taskCode, error, req);
   this.c.onErrorReceived(taskCode, error);
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
