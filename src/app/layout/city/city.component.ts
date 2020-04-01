import { Component, OnInit } from '@angular/core';
import { CommonServices } from '../../framework/common.service';
import { ApiGenerator } from '../../framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse, CityDetail, CitiesResponse } from 'src/app/models/CityResponse';
import { BaseComponent } from 'src/app/framework/BaseCompo';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CommonServices]
})
export class CityComponent extends BaseComponent implements OnInit {
  citylist: CityDetail[];
  cityDetail: Array<CityDetail>;
  constructor(private service: CommonServices) { 
    super(service);
  }
number : string = '9a199959-ea10-490a-b2ae-207bba19462b';
  ngOnInit() {
    this.getAllCity();
   console.log( sessionStorage.getItem('token'));
  } 

  getAllCity() {
    this.downloadData(ApiGenerator.getAllCity());
  }
  deleteCity(id: number) {
    this.downloadData(ApiGenerator.deleteCityRequest(id));
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_CITY:
          const cityRes = response as CityDetailResponse;
          this.cityDetail = cityRes.response.data;
          break;
        case TaskCode.DEL_CITY:
          break;
      }
    }
    return true;
  }

}
