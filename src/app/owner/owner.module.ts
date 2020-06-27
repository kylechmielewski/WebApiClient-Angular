import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent],
  imports: [
    CommonModule,
    //we are exposing our OwnerListComponent on the http://localhost:4200/owner/list endpoint
    RouterModule.forChild([
      { path: 'List', component: OwnerListComponent },
      { path: 'Details/:id', component: OwnerDetailsComponent }
    ])
  ]
})
export class OwnerModule { }
