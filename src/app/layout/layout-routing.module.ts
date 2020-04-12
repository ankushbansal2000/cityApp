import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: "city", loadChildren: "./city/city.module#CityModule" },
      { path: "master-categories", loadChildren: "./master-category/master-category.module#MasterCategoryModule" },
      { path: "vendor", loadChildren: "./vendor/vendor.module#VendorModule" },
      { path: "service-request", loadChildren: "./service-request/service-request.module#ServiceRequestModule" },
      { path: "user", loadChildren: "./user/user.module#UserModule" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
