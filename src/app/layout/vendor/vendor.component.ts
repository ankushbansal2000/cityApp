import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse } from 'src/app/models/CityResponse';
import { Vendor, VendorResponse } from 'src/app/models/VendorResponse';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [CommonService]
})
export class VendorComponent extends BaseComponent implements OnInit {
  vendorlist: Vendor[];
  constructor(private service: CommonService) { 
    super(service);
  }

  ngOnInit() {
   this.getAllVendor();
  }

  getAllVendor() {
    this.downloadData(ApiGenerator.getAllVendor());
  }
  deleteVendor(id: number) {
    this.downloadData(ApiGenerator.deleteCityRequest(id));
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_VENDOR:
          const cityRes = response as VendorResponse;
          console.log(cityRes);
          break;
        case TaskCode.DEL_CITY:
          break;
      }
    }
    return true;
  }


}
