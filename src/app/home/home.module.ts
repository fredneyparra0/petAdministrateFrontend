import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePersonComponent } from './views/create-person/create-person.component';
import { UpdatePersonComponent } from './views/update-person/update-person.component';
import { RouterModule } from '@angular/router';
import { TableItemsComponent } from './components/table-items/table-items.component';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPetComponent } from './components/modal-pet/modal-pet.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    TableItemsComponent,
    FormPersonComponent,
    ModalPetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class HomeModule { }
