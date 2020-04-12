import { MasterCategorResponse, MasterCategorysResponse } from './../../../models/MasterCategoriesResponse';
import { FileResponse } from './../../../models/FileResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServices } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CheckUtil } from 'src/app/framework/Utils/CheckUtils';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { MasterCategories, MasterCategoriesResponse } from 'src/app/models/MasterCategoriesResponse';
import { Location } from '@angular/common';
import { TaskCode } from 'src/app/framework/global';
@Component({
  selector: 'app-add-master-category',
  templateUrl: './add-master-category.component.html',
  styleUrls: ['./add-master-category.component.css'],
  providers: [CommonServices]
})
export class AddMasterCategoryComponent extends BaseComponent implements OnInit {

  masterCategoryDetail: MasterCategories;
  masterId: number;
  imageIcon : boolean;
  constructor(public location: Location,public router: Router, 
    public activeRoute: ActivatedRoute, public service: CommonServices) {
    super(service);
  }
  ngOnInit() {
    this.masterId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.masterId)) {
      this.getMasterCategoryDetailById(this.masterId);
    }
    this.masterCategoryDetail = new MasterCategories();
  }

  public get _buttonText() {
    if (this.masterId) {
      return "Update "
    } else {
      return "Submit"
    }
  }

  public get _headerText() {
    if (this.masterId) {
      return "Update Master Category"
    }
    else {
      return "New Master Category"
    }
  }

  save() {
    if (this.masterId) {
      this.updateMasterCategoryDetail(this.masterId, this.masterCategoryDetail);
    }
    else {
      this.addNewMasterCategoryDetail(this.masterCategoryDetail);
    }
  }


  onIconUrlChanges(event) {
    this.imageIcon = true;
    this.downloadData(ApiGenerator.getFileRequest(event.target.files[0]));
  }
  onbgImageChanges(event) {
    this.imageIcon = false;
    this.downloadData(ApiGenerator.getFileRequest(event.target.files[0]));
  }

  updateMasterCategoryDetail(id: number, masterCategoryAdd) {
    this.downloadData(ApiGenerator.updateMasterCategoriesRequest(id , masterCategoryAdd));
  }

  addNewMasterCategoryDetail(masterCategoryAdd) {
    this.downloadData(ApiGenerator.postMasterCategories(masterCategoryAdd));
  }

  getMasterCategoryDetailById(id: number) {
    this.downloadData(ApiGenerator.getByIdMasterCategoriesRequest(id));
  }

  goBack() {
    this.location.back()
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_DATA_BY_ID_MASTER_CATEGORIES:
          const masterRes = response as MasterCategorysResponse;
   
          this.masterCategoryDetail = masterRes.response.data;
      
          break;
        case TaskCode.POST_MASTER_CATEGORIES:
          this.router.navigate(['/master-categories']);
          break;
        case TaskCode.UPDATE_MASTER_CATEGORIES:
          this.router.navigate(['/master-categories']);
          break;
        case TaskCode.UPLOAD_IMAGE_URL:
            const apiResponse = response as FileResponse;
       
            if(this.imageIcon) {
              this.masterCategoryDetail.iconUrl = apiResponse.response.data;
            } else {
              this.masterCategoryDetail.bgImage = apiResponse.response.data;
            }
          
            break;
      }
    }
    return true;
  }

}
