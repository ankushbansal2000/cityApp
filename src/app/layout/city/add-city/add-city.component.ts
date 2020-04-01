import { Component, OnInit } from '@angular/core';
import { CheckUtil } from 'src/app/framework/Utils/CheckUtils';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServices } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { Location } from '@angular/common';
import { CityDetail, CityDetailsResponse } from 'src/app/models/CityResponse';
import { TaskCode } from 'src/app/framework/global';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
  providers: [CommonServices]
})
export class AddCityComponent extends BaseComponent implements OnInit {
  cityDetail: CityDetail;
  cityId: number;
  constructor(public location: Location, public activeRoute: ActivatedRoute,
    public router: Router, public service: CommonServices) {
    super(service);
  }


  ngOnInit() {
    this.cityId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.cityId)) {
      this.getCityDetailById(this.cityId);
    }
    this.cityDetail = new CityDetail();
  }

  public get _buttonText() {
    if (this.cityId) {
      return "Update "
    } else {
      return "Submit"
    }
  }

  public get _headerText() {
    if (this.cityId) {
      return "Update City"
    }
    else {
      return "New City"
    }
  }

  save() {
    if (this.cityId) {
      this.updateCityDetail(this.cityId);
    }
    else {
      this.addNewCityDetail();
    }
  }

  updateCityDetail(id: number) {
    this.downloadData(ApiGenerator.updateCityRequest(id , this.cityDetail));
  }

  addNewCityDetail() {
    this.downloadData(ApiGenerator.postCity(this.cityDetail));
  }

  getCityDetailById(id: number) {
    this.downloadData(ApiGenerator.getByIdCityRequest(id));
  }

  goBack() {
    this.location.back();
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_DATA_BY_ID_CITY:
          const cityRes = response as CityDetailsResponse;
          this.cityDetail = cityRes.response.data;
          console.log(this.cityDetail)
          break;
        case TaskCode.POST_CITY:
          this.router.navigate(['/city']);
          break;
        case TaskCode.UPDATE_CITY:
          this.router.navigate(['/city']);
          break;
      }
    }
    return true;
  }
}
