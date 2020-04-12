import { CityDetailsResponse, CityDetail, CityDetailResponse } from './../../../models/CityResponse';
import { CommonServices } from './../../../framework/common.service';
import { UserDetail, UserDetailsResponse } from './../../../models/UserResponse';
import { CheckUtil } from './../../../framework/Utils/CheckUtils';
import { BaseComponent } from './../../../framework/BaseCompo';
import { ApiGenerator } from './../../../framework/ApiGenerator';
import { TaskCode } from './../../../framework/global';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [CommonServices]
})
export class AddUserComponent extends BaseComponent implements OnInit {
  userDetail: UserDetail;
  userId: number;
  cityDetail: Array<CityDetail>;
  constructor(public location: Location, public activeRoute: ActivatedRoute,
    public router: Router, public service: CommonServices) {
    super(service);
  }


  ngOnInit() {
    this.userId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.userId)) {
      this.getUserDetailById(this.userId);
    }
    this.getAllCity();
    this.userDetail = new UserDetail();
  }


  public get _buttonText() {
    if (this.userId) {
      return "Update "
    }
  }

  public get _headerText() {
    if (this.userId) {
      return "Update User"
    }
  }

  save() {
    if (this.userId) {
      this.updateUserDetail(this.userId);
    }
  }

  updateUserDetail(id: number) {
    this.downloadData(ApiGenerator.updateUserRequest(id , this.userDetail));
  }

  getUserDetailById(id: number) {
    this.downloadData(ApiGenerator.getByIdUserRequest(id));
  }
  getAllCity() {
    this.downloadData(ApiGenerator.getAllCity());
  }



  goBack() {
    this.location.back();
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_DATA_BY_ID_USER:
          const userRes = response as UserDetailsResponse;
          this.userDetail = userRes.response.data;

          break;
        case TaskCode.UPDATE_USER:
          this.router.navigate(['/user']);
          break;
          case TaskCode.GET_ALL_CITY:
            const cityResp = response as CityDetailResponse;
            this.cityDetail = cityResp.response.data;
            break;
      }
    }
    return true;
  }

}
