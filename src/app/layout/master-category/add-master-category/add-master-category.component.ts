import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/framework/common.service';
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
  providers: [CommonService]
})
export class AddMasterCategoryComponent extends BaseComponent implements OnInit {

  masterCategoryDetail: MasterCategories;
  masterId: number;
  constructor(public location: Location,public router: Router, public activeRoute: ActivatedRoute, public service: CommonService) {
    super(service);
  }
  ngOnInit() {
    this.masterId = this.activeRoute.snapshot.params['id'];
    if (!CheckUtil.isNullorUndefined(this.masterId)) {
     // this.getMasterCategoryById(this.masterId);
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

  onDescriptionChanges(event) {
    this.masterCategoryDetail.description = event.target.value;
  }
  onSubTitleChanges(event){
    this.masterCategoryDetail.subTitle = event.target.value;
  }
  onTitleChanges(event){
    this.masterCategoryDetail.title = event.target.value;
  }
  onEntityChanges(event) {
    this.masterCategoryDetail.entity = event.target.value;
  }
  onMasterJsonChanges(event) {
    this.masterCategoryDetail.master_json_key = event.target.value;
  }
  onIconUrlChanges(event) {
    this.masterCategoryDetail.iconUrl = event.target.value;
  }
  onbgImageChanges(event) {
    this.masterCategoryDetail.bgImage = event.target.value;
  }

  updateMasterCategoryDetail(id: number, masterCategoryAdd) {
    masterCategoryAdd = new FormData();
    masterCategoryAdd.append('title', this.masterCategoryDetail.title);
    masterCategoryAdd.append('subTitle', this.masterCategoryDetail.subTitle);
    masterCategoryAdd.append('entity', this.masterCategoryDetail.entity);
    masterCategoryAdd.append('description', this.masterCategoryDetail.description);
    masterCategoryAdd.append('master_json_key', this.masterCategoryDetail.master_json_key);
    masterCategoryAdd.append('iconUrl', this.masterCategoryDetail.iconUrl);
    masterCategoryAdd.append('bgImage', this.masterCategoryDetail.bgImage);
    this.downloadData(ApiGenerator.updateMasterCategoriesRequest(id , masterCategoryAdd));
  }

  addNewMasterCategoryDetail(masterCategoryAdd) {
    masterCategoryAdd = new FormData();
    masterCategoryAdd.append('title', this.masterCategoryDetail.title);
    masterCategoryAdd.append('subTitle', this.masterCategoryDetail.subTitle);
    masterCategoryAdd.append('entity', this.masterCategoryDetail.entity);
    masterCategoryAdd.append('description', this.masterCategoryDetail.description);
    masterCategoryAdd.append('master_json_key', this.masterCategoryDetail.master_json_key);
    masterCategoryAdd.append('iconUrl', this.masterCategoryDetail.iconUrl);
    masterCategoryAdd.append('bgImage', this.masterCategoryDetail.bgImage);
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
          const masterRes = response as MasterCategoriesResponse;
          this.masterCategoryDetail = masterRes.data;
          console.log(this.masterCategoryDetail)
          break;
        case TaskCode.POST_MASTER_CATEGORIES:
          this.router.navigate(['/master-categories']);
          break;
        case TaskCode.UPDATE_MASTER_CATEGORIES:
          this.router.navigate(['/master-categories']);
          break;
      }
    }
    return true;
  }

}
