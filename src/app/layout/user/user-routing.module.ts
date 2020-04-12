import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: UserComponent
  },
  { path: 'adduser', component: AddUserComponent },
  { path: 'edituser/:id', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
