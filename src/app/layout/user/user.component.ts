import { ApiGenerator } from './../../framework/ApiGenerator';
import { CommonServices } from './../../framework/common.service';
import { BaseComponent } from './../../framework/BaseCompo';
import { TaskCode } from './../../framework/global';
import { Component, OnInit } from '@angular/core';
import { UserDetail, UserDetailResponse } from 'src/app/models/UserResponse';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {
  userlist: UserDetail[];
  userDetail: Array<UserDetail>;
  constructor(private service : CommonServices) { 
    super(service);
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.downloadData(ApiGenerator.getAllUser());
  }
  deleteUser(id: number) {
    this.downloadData(ApiGenerator.deleteUserRequest(id));
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_USER:
          const userRes = response as UserDetailResponse;
          this.userDetail = userRes.response.data;
          break;
        case TaskCode.DEL_USER:
          location.reload();
          break;
      }
    }
    return true;
  }

}
