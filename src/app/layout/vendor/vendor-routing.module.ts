import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';


const routes: Routes = [
  {
    path: '', component: VendorComponent
  },
  { path: 'addvendor', component: AddVendorComponent },
  { path: 'editvendor/:id', component: AddVendorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
