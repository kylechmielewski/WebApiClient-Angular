import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerDeleteComponent } from './owner-delete/owner-delete.component';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    OwnerDeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    //we are exposing our OwnerListComponent on the http://localhost:4200/owner/list endpoint
    RouterModule.forChild([
      { path: 'List', component: OwnerListComponent },
      { path: 'Details/:id', component: OwnerDetailsComponent },
      { path: 'Create', component: OwnerCreateComponent },
      { path: 'Update/:id', component: OwnerUpdateComponent },
      { path: 'Delete/:id', component: OwnerDeleteComponent }
    ])
  ]
})
export class OwnerModule { }
