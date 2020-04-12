import { CityDetailResponse, CityDetail } from 'src/app/models/CityResponse';
import { VendorDetailResponse, Vendors, VendoResponse, VendorDetaResponse } from './../../../models/VendorResponse';
import { MasterCategorResponse, MasterCategories, MasterCategorysResponse } from './../../../models/MasterCategoriesResponse';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/VendorResponse';
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
  vendorDetail: Vendors;
  vendor : Vendor;
  vendorId: number;
  dropdownList = [];
  selectedList = [];
  category: Array<number> = [];
  dropdownSettings = {};
  masterList: MasterCategories[] = [];
  mast: MasterCategories;
  isDropdown: boolean = false;
  creativeTypeName: Array<string> = [];
  cityDetail: Array<CityDetail>;
  selected: Array<number> = [];
  constructor(public location: Location, public router: Router,
    public activeRoute: ActivatedRoute, public service: CommonServices) {
    super(service);
  }

  ngOnInit() {
    this.vendorId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.vendorId)) {
      this.getVendorById(this.vendorId);
    }
    this.vendorDetail = new Vendors();
    this.dropdownList = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    this.getAllMasterCategory();
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.getAllCity();
  }

  public get _buttonText() {
    if (this.vendorId) {
      return "Update "
    } else {
      return "Submit"
    }
  }
  onChange(checked, item: number, name: string) {
    if (checked) {
      this.selected.push(item);
      this.creativeTypeName.push(name);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1);
      this.creativeTypeName.splice(this.creativeTypeName.indexOf(name), 1);
    }
  }

  checked(item, name) {
    if (this.selected.indexOf(item) != -1 && this.creativeTypeName.indexOf(name) != -1) {
      return true;
    }
  }

 public get _listName() {
   return this.creativeTypeName;
  }

  public get _headerText() {
    if (this.vendorId) {
      return "Update Vendor"
    }
    else {
      return "New Vendor"
    }
  }

  categoryGet() {
    //   this.getAllMasterCategory();
  }

  save() {
    if (this.vendorId) {
       this.updateVendor(this.vendorId);
    }
    else {
      this.addNewVendor();
    }
  }

  getAllCity() {
    this.downloadData(ApiGenerator.getAllCity());
  }

  updateVendor(id: number) {
    this.vendorDetail.categories = this.selected;
    this.downloadData(ApiGenerator.updateVendorRequest(id, this.vendorDetail));
  }

  addNewVendor() {
    this.vendorDetail.categories = this.selected;
    this.downloadData(ApiGenerator.postVendor(this.vendorDetail));
  }

  getVendorById(id: number) {
    this.downloadData(ApiGenerator.getByIdVendorRequest(id));
  }

  getAllMasterCategory() {
    this.downloadData(ApiGenerator.getAllMasterCategories());
  }

  goBack() {
    this.location.back();
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_DATA_BY_ID_VENDOR:
          const vendorRes = response as VendorDetailResponse;
                 this.vendor = vendorRes.response.data;
                 this.vendorDetail.name = this.vendor.name;
                 this.vendorDetail.businessName = this.vendor.businessName;
                 this.vendorDetail.contactNumber = this.vendor.contactNumber;
                 this.vendorDetail.altContactNumber = this.vendor.altContactNumber;
                 this.vendorDetail.address = this.vendor.address;
                 this.vendorDetail.lat = this.vendor.lat;
                 this.vendorDetail.latLong = this.vendor.latLong;
                 this.vendorDetail.lng = this.vendor.lng;
                 this.vendorDetail.houseNumber = this.vendor.houseNumber;
                 this.vendorDetail.startTime = this.vendor.startTime;
                 this.vendorDetail.endTime = this.vendor.endTime;
                 this.vendorDetail.pincode = this.vendor.pincode;
                 this.vendorDetail.rangeOfDelivery = this.vendor.rangeOfDelivery;
                 this.vendorDetail.password = this.vendor.password;
                 this.vendorDetail.workingDays = this.vendor.workingDays;
                 this.vendorDetail.city = this.vendor.city;
                this.vendor.categories.forEach(value => {
                  this.selected.push(value.id);
                });
                this.vendor.categories.forEach(value => {
                  this.creativeTypeName.push(value.title);
                });
              
          break;
        case TaskCode.POST_VENDOR:
          this.router.navigate(['/vendor']);
          break;
        case TaskCode.UPDATE_VENDOR:
          this.router.navigate(['/vendor']); 
          break;
        case TaskCode.GET_ALL_MASTER_CATEGORIES:
          const cityRes = response as MasterCategorResponse;
          this.masterList = cityRes.response.data;
          break;
        case TaskCode.GET_ALL_CITY:
          const cityResp = response as CityDetailResponse;
          this.cityDetail = cityResp.response.data;
          break;
      }
    }
    return true;
  }

  onItemSelect(e) {
  }
  onItemDeSelect(e) {
  }

  setDropdown() {
    if (this.isDropdown === false) {
      this.isDropdown = true;
    } else {
      this.isDropdown = false;
    }
  }


  setDataDropdown() {

  }

  dropdownClose() {
    this.isDropdown = false;
  }

}