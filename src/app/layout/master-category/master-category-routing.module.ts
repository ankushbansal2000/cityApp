import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterCategoryComponent } from './master-category.component';
import { AddMasterCategoryComponent } from './add-master-category/add-master-category.component';


const routes: Routes = [
  {
    path: '' , component: MasterCategoryComponent
  },
  { path: 'addMasterCategory', component: AddMasterCategoryComponent },
  { path: 'editMasterCategory/:id', component: AddMasterCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterCategoryRoutingModule { }
