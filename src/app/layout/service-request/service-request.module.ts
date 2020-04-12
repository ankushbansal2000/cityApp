import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceRequestComponent } from './service-request.component';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';


@NgModule({
  declarations: [ServiceRequestComponent, AddServiceRequestComponent],
  imports: [
    CommonModule,
    ServiceRequestRoutingModule
  ]
})
export class ServiceRequestModule { }
