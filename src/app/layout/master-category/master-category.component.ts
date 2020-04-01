import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse } from 'src/app/models/CityResponse';
import { MasterCategories } from 'src/app/models/MasterCategoriesResponse';

@Component({
  selector: 'app-master-category',
  templateUrl: './master-category.component.html',
  styleUrls: ['./master-category.component.css'],
  providers: [CommonService]
})
export class MasterCategoryComponent extends BaseComponent implements OnInit {
  masterCategorylist: MasterCategories[];
  constructor(private service: CommonService) { 
    super(service);
  }

  ngOnInit() {
  }


  getAllCity() {
    this.downloadData(ApiGenerator.getAllMasterCategories());
  }
  deleteMasterCategory(id: number) {
    this.downloadData(ApiGenerator.deleteMasterCategoriesRequest(id));
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_CITY:
          const cityRes = response as CityDetailResponse;
          console.log(cityRes);
          break;

        case TaskCode.DEL_CITY:
          break;
      }
    }
    return true;
  }


}
