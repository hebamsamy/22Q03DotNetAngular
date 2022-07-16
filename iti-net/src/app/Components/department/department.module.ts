import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared.module';

let DepRoute:Routes=[
  {path:'',component:ListComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:CreateComponent},
]

@NgModule({
  declarations: [    
    CreateComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,RouterModule.forChild(DepRoute)
  ]
})
export class DepartmentModule { }
