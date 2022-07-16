import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';


let StdRoutes:Routes =[
  {path:"",component:StudentListComponent},
  {path:"create",component:CreateStudentComponent},
  {path:"edit/:id",component:CreateStudentComponent},
  {path:"details/:id",component:StudentDetailsComponent},
]

@NgModule({
  declarations: [
    StudentCardComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(StdRoutes)
  ]
})
export class StudentModule { }
