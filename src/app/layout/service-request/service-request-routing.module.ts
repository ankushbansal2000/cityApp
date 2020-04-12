import { ServiceRequestComponent } from './service-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';


const routes: Routes = [
  {
    path: '', component: ServiceRequestComponent
  },
   { path: 'addservice', component: AddServiceRequestComponent },
  { path: 'editservice/:id', component: AddServiceRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRequestRoutingModule { }
