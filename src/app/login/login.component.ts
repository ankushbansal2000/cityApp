import { LoginDetailResponse, LoginDetailsResponse } from './../models/LoginResponse';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { KEYS } from './../framework/StorageUtil';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginDetail, LoginDetResponse } from '../models/LoginResponse';
import { CommonServices } from './../framework/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginDetail, CommonServices]
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginDetail= {} as LoginDetail;

  //number: string = '24cdc839-b05d-4f66-bda7-80a1cf546959';
  constructor(public router: Router, public loginservice: LoginDetail, private service: CommonServices) {
    super(service);
  }

  ngOnInit() {
    console.log("login")
  }

  onLogin(loginDetail: LoginDetail) {
    this.downloadData(ApiGenerator.postLoginApi(this.loginDetail));
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_LOGIN_URL:
            let loginresponse = response as LoginDetailsResponse;
        console.log(loginresponse);
     //     sessionStorage.setItem(KEYS.TOKEN, loginresponse.response.data.token);
          sessionStorage.setItem('token', loginresponse.response.data.token);
          this.router.navigate(["/city"]);
          break;
      }
    }
    else {
      console.log("Error Login Api");
      alert("Please Enter Correct Information");
    }
    return isSuccess;
  }


}
