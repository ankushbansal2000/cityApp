import { Component, OnInit } from '@angular/core';
import { Vendor, VendorResponse } from 'src/app/models/VendorResponse';
import { Location } from '@angular/common';
import { CheckUtil } from 'src/app/framework/Utils/CheckUtils';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonServices } from 'src/app/framework/common.service';
import { TaskCode } from 'src/app/framework/global';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css'],
  providers: [CommonServices]
})
export class AddVendorComponent extends BaseComponent implements OnInit {
  vendorDetail: Vendor;
  vendorId: number;
  dropdownList=[];
  selectedList = [];
  dropdownSettings = {};
  constructor(public location: Location,public router: Router, 
    public activeRoute: ActivatedRoute, public service: CommonServices) {
    super(service);
  }

  ngOnInit() {
    this.vendorId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.vendorId)) {
   //   this.getVendorById(this.vendorId);
    }
    this.vendorDetail = new Vendor();
    this.dropdownList = [
      'sunday', 
      'monday', 
      'tuesday', 
      'wednesday', 
      'thursday', 
      'friday', 
      'saturday', 
    ];
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  public get _buttonText() {
    if (this.vendorId) {
      return "Update "
    } else {
      return "Submit"
    }
  }

  public get _headerText() {
    if (this.vendorId) {
      return "Update Vendor"
    }
    else {
      return "New Vendor"
    }
  }

  save(data: Vendor) {
    if (this.vendorId) {
     // this.updateVendor(this.vendorId);
      console.log(data);
    }
    else {
      console.log(data);
     // this.addNewVendor();
    }
  }

  updateVendor(id: number) {
    this.downloadData(ApiGenerator.updateVendorRequest(id , this.vendorDetail));
  }

  addNewVendor() {
    this.downloadData(ApiGenerator.postVendor(this.vendorDetail));
  }

  getVendorById(id: number) {
    this.downloadData(ApiGenerator.getByIdVendorRequest(id));
  }

  goBack() {
    this.location.back();
  }
  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_DATA_BY_ID_VENDOR:
          const vendorRes = response as VendorResponse;
          this.vendorDetail = vendorRes.data;
          console.log(this.vendorDetail)
          break;
        case TaskCode.POST_VENDOR:
          this.router.navigate(['/vendor']);
          break;
        case TaskCode.UPDATE_VENDOR:
          this.router.navigate(['/vendor']);
          break;
      }
    }
    return true;
  }

  onItemSelect(e) {
    console.log(this.selectedList);
  }
  onItemDeSelect(e) {
    console.log(e);
  }

}
