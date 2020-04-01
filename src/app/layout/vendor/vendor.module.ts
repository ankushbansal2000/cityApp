import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [VendorComponent, AddVendorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    VendorRoutingModule
  ]
})
export class VendorModule { }
