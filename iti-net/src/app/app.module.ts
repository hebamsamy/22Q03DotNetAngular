import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { TaskComponent } from './task/task.component';
import { NavComponent } from './nav/nav.component';
import { ApiTaskComponent } from './api-task/api-task.component';
import { TaskServices } from './Services/TextService';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './AppRouting';
import { StudentServices } from './Services/StudentServices';
import { LoginComponent } from './Components/account/login/login.component';
import { SignupComponent } from './Components/account/signup/signup.component';
import { LogoutComponent } from './Components/account/logout/logout.component';
import { AccountServices } from './Services/Account';
import { HomeComponent } from './Components/home/home.component';
import { UnauthoriedComponent } from './unauthoried/unauthoried.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TaskComponent,
    NavComponent,
    ApiTaskComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    UnauthoriedComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    TaskServices,
    StudentServices,
    AccountServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
