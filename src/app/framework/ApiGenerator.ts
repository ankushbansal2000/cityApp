import { UserDetailResponse, UserDetail } from './../models/UserResponse';
import { VendorResponse } from 'src/app/models/VendorResponse';
import { Vendors } from './../models/VendorResponse';
import { FileResponse } from './../models/FileResponse';
import { Logger } from './Utils/Logger';
import { LoginDetail, LoginDetailResponse } from './../models/LoginResponse';
import { BaseResponse } from './BaseResponseModel';
import { HttpRequest } from './HttpRequest';
import * as global from './global';
import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { StorageUtil, KEYS } from './StorageUtil';
import { TaskCode } from './global';
import { from } from 'rxjs';
import { CityDetailResponse, CityDetail, CitiesResponse } from '../models/CityResponse';
import { Vendor } from '../models/VendorResponse';
import { MasterCategoryResponse, MasterCategories } from '../models/MasterCategoriesResponse';



export class ApiGenerator {

    static postLoginApi(login: LoginDetail) {
      const httpreq = new HttpRequest(global.GET_LOGIN_URL);
      httpreq.params = classToPlain(login);
      httpreq.taskCode = TaskCode.GET_LOGIN_URL;
      httpreq.classTypeValue = LoginDetailResponse;
      httpreq.setPostMethod();
      return httpreq;
    }

  //     CITY      //

  static getAllCity() {
    const http = new HttpRequest(global.GET_ALL_CITY);
    http.classTypeValue = CityDetailResponse;
    http.taskCode = TaskCode.GET_ALL_CITY;
    return http;
  }
  static getByIdCityRequest(id: number) {
    const httpreq = new HttpRequest(global.GET_DATA_BY_ID_CITY.concat("?id=").concat(id.toString()));
    httpreq.classTypeValue = CitiesResponse;
    httpreq.taskCode = TaskCode.GET_DATA_BY_ID_CITY;
    console.log(httpreq);
    return httpreq;
  }

 static postCity(model: CityDetail) {
   const http = new HttpRequest(global.POST_CITY);
   http.setPostMethod();
   http.classTypeValue = BaseResponse;
   http.params = classToPlain(model as object);
   http.taskCode = TaskCode.POST_CITY;
   return http;
 }

 static deleteCityRequest(id: number) {
  const http = new HttpRequest(global.DEL_CITY.concat("?id=").concat(id.toString()));
  http.setDeleteMethod();
  http.classTypeValue = CitiesResponse;
  http.taskCode = TaskCode.DEL_CITY;
  return http;
}

static updateCityRequest(id: number, data : CityDetail) {
  const http = new HttpRequest(global.UPDATE_CITY.concat("?id=").concat(id.toString()));
  http.setPatchMethod();
  http.taskCode = TaskCode.UPDATE_CITY;
  http.params = classToPlain(data);
  return http;
}

//  MASTER CATEGORIES   //

static getAllMasterCategories() {
  const http = new HttpRequest(global.GET_ALL_MASTER_CATEGORIES);
  http.classTypeValue = MasterCategoryResponse;
  http.taskCode = TaskCode.GET_ALL_MASTER_CATEGORIES;
  return http;
}
static getByIdMasterCategoriesRequest(id: number) {
  const httpreq = new HttpRequest(global.GET_DATA_BY_ID_MASTER_CATEGORIES.concat("?id=").concat(id.toString()));
  httpreq.classTypeValue = MasterCategoryResponse;
  httpreq.taskCode = TaskCode.GET_DATA_BY_ID_MASTER_CATEGORIES;
  return httpreq;
}

static postMasterCategories(model: FormData) {
 const http = new HttpRequest(global.POST_MASTER_CATEGORIES);
 http.setPostMethod();
 http.classTypeValue = MasterCategoryResponse;
 http.params = classToPlain(model as object);
 http.taskCode = TaskCode.POST_MASTER_CATEGORIES;
 return http;
}

static deleteMasterCategoriesRequest(id: MasterCategories) {
const http = new HttpRequest(global.DEL_MASTER_CATEGORIES.concat("?id=").concat(id.toString()));
http.setDeleteMethod();
http.classTypeValue = MasterCategoryResponse;
http.taskCode = TaskCode.DEL_MASTER_CATEGORIES;
return http;
}

static updateMasterCategoriesRequest(id: number, data: FormData) {
const http = new HttpRequest(global.UPDATE_MASTER_CATEGORIES.concat("?id=").concat(id.toString()));
http.params = classToPlain(data);
http.setPatchMethod();
http.taskCode = TaskCode.UPDATE_MASTER_CATEGORIES;
return http;
}

//        VENDOR         //


static getAllVendor() {
  const http = new HttpRequest(global.GET_ALL_VENDOR);
  http.classTypeValue = VendorResponse;
  http.taskCode = TaskCode.GET_ALL_VENDOR;
  return http;
}
static getByIdVendorRequest(id: number) {
  const httpreq = new HttpRequest(global.GET_DATA_BY_ID_VENDOR.concat("?id=").concat(id.toString()));
  httpreq.classTypeValue = VendorResponse;
  httpreq.taskCode = TaskCode.GET_DATA_BY_ID_VENDOR;
  return httpreq;
}

static postVendor(model: Vendors) {
 const http = new HttpRequest(global.POST_VENDOR);
 http.setPostMethod();
 http.classTypeValue = VendorResponse;
 http.params = classToPlain(model as object);
 http.taskCode = TaskCode.POST_VENDOR;
 return http;
}

static deleteVendorRequest(id: number) {
const http = new HttpRequest(global.DEL_VENDOR.concat("?id=").concat(id.toString()));
http.setDeleteMethod();
http.classTypeValue = VendorResponse;
http.taskCode = TaskCode.DEL_VENDOR;
return http;
}

static updateVendorRequest(id: number, vendorDetail : Vendors) {
const http = new HttpRequest(global.UPDATE_VENDOR.concat("?id=").concat(id.toString()));
http.params = classToPlain(vendorDetail);
http.setPatchMethod();
http.taskCode = TaskCode.UPDATE_VENDOR;
return http;
}


// image

static getFileRequest(file: File) {
  var data: FormData = new FormData();
  data.append("file", file);
  data.append("filetype", "1");
  Logger.log(data);
  return this.uploadFile(data);
}

static uploadFile(data: FormData) {
  const httpreq = new HttpRequest(global.UPLOAD_IMAGE_URL);
  httpreq.taskCode = TaskCode.UPLOAD_IMAGE_URL;
  httpreq.removeHeader("Content-Type");
  httpreq.params = data;
  httpreq.classTypeValue = FileResponse;
  httpreq.setPostMethod();
  console.log(httpreq);
  return httpreq;
}

  //     USER      //

  static getAllUser() {
    const http = new HttpRequest(global.GET_ALL_USER);
    http.classTypeValue = UserDetailResponse;
    http.taskCode = TaskCode.GET_ALL_USER;
    return http;
  }
  static getByIdUserRequest(id: number) {
    const httpreq = new HttpRequest(global.GET_DATA_BY_ID_USER.concat("?id=").concat(id.toString()));
    httpreq.classTypeValue = UserDetailResponse;
    httpreq.taskCode = TaskCode.GET_DATA_BY_ID_USER;
    return httpreq;
  }

 static deleteUserRequest(id: number) {
  const http = new HttpRequest(global.DEL_USER.concat("?id=").concat(id.toString()));
  http.setDeleteMethod();
  http.classTypeValue = UserDetailResponse;
  http.taskCode = TaskCode.DEL_USER;
  return http;
}

static updateUserRequest(id: number, data : UserDetail) {
  const http = new HttpRequest(global.UPDATE_USER.concat("?id=").concat(id.toString()));
  http.setPatchMethod();
  http.taskCode = TaskCode.UPDATE_USER;
  http.params = classToPlain(data);
  return http;
}





}




export class JsonParser {
  static parseJson<T>(response: any, type: ClassType<T>): T {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonString(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonArray(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response);
    return parsedResponse;
  }


}
