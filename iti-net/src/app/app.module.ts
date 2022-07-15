import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { TaskComponent } from './task/task.component';
import { NavComponent } from './nav/nav.component';
import { ApiTaskComponent } from './api-task/api-task.component';
import {HttpClientModule} from'@angular/common/http'
import { TaskServices } from './Services/TextService';
import { CreateStudentComponent } from './Components/Student/create-student/create-student.component';
import { StudentDetailsComponent } from './Components/Student/student-details/student-details.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './AppRouting';
import { StudentServices } from './Services/StudentServices';
import { MaxlenghtPipe } from './maxlenght.pipe';
import { LoginComponent } from './Components/account/login/login.component';
import { SignupComponent } from './Components/account/signup/signup.component';
import { LogoutComponent } from './Components/account/logout/logout.component';
import { AccountServices } from './Services/Account';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TaskComponent,
    NavComponent,
    ApiTaskComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    FooterComponent,
    NotfoundComponent,
    MaxlenghtPipe,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskServices,
    StudentServices,
    AccountServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
