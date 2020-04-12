import { MasterCategoriesResponse, MasterCategorResponse } from './../../models/MasterCategoriesResponse';
import { CitiesResponse, CityDetailsResponse } from './../../models/CityResponse';
import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse } from 'src/app/models/CityResponse';
import { MasterCategories } from 'src/app/models/MasterCategoriesResponse';

@Component({
  selector: 'app-master-category',
  templateUrl: './master-category.component.html',
  styleUrls: ['./master-category.component.css'],
  providers: [CommonServices]
})
export class MasterCategoryComponent extends BaseComponent implements OnInit {
  masterCategorylist: MasterCategories[];
  masterList : Array<MasterCategories>;
  constructor(private service: CommonServices) { 
    super(service);
  }

  ngOnInit() {
    this.getAllMasterCategory();
  }

  deleteMasterCategory(id: MasterCategories) {
    this.downloadData(ApiGenerator.deleteMasterCategoriesRequest(id));
  }

  getAllMasterCategory() {
    this.downloadData(ApiGenerator.getAllMasterCategories());
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_MASTER_CATEGORIES:
          const cityRes = response as MasterCategorResponse;
          this.masterList = cityRes.response.data;
        
          break;

        case TaskCode.DEL_MASTER_CATEGORIES:
        location.reload();
          break;
      }
    }
    return true;
  }


}
