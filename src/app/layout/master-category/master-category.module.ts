import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterCategoryRoutingModule } from './master-category-routing.module';
import { MasterCategoryComponent } from './master-category.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMasterCategoryComponent } from './add-master-category/add-master-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MasterCategoryComponent, AddMasterCategoryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MasterCategoryRoutingModule
  ]
})
export class MasterCategoryModule { }
