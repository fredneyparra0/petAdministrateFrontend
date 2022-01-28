import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './home/views/create-person/create-person.component';
import { DashboardComponent } from './home/views/dashboard/dashboard.component';
import { UpdatePersonComponent } from './home/views/update-person/update-person.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'createperson',
    component: CreatePersonComponent
  },
  {
    path: 'updateperson/:id',
    component: UpdatePersonComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
