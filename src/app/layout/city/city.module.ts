import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCityComponent } from './add-city/add-city.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CityComponent, AddCityComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CityRoutingModule
  ]
})
export class CityModule { }
