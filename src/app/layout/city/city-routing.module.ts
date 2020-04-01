import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';
import { AddCityComponent } from './add-city/add-city.component';


const routes: Routes = [
  {
    path: '' , component: CityComponent
  },
  { path: 'addcity', component: AddCityComponent },
  { path: 'editcity/:id', component: AddCityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
