import { VendorDetaResponse } from './../../models/VendorResponse';
import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse } from 'src/app/models/CityResponse';
import { Vendor, VendorResponse } from 'src/app/models/VendorResponse';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [CommonServices]
})
export class VendorComponent extends BaseComponent implements OnInit {
  vendorlist: Vendor[];
  constructor(private service: CommonServices) { 
    super(service);
  }

  ngOnInit() {
   this.getAllVendor();
  }

  getAllVendor() {
    this.downloadData(ApiGenerator.getAllVendor());
  }
  deleteVendor(id: number) {
    this.downloadData(ApiGenerator.deleteVendorRequest(id));
  }



  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_VENDOR:
          const vendorRes = response as VendorDetaResponse;
          this.vendorlist = vendorRes.response.data;
          console.log(this.vendorlist);
          break;
        case TaskCode.DEL_VENDOR:
          location.reload();
          break;
        
      }
    }
    return true;
  }


}
