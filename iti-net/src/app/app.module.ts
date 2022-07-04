import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { TaskComponent } from './task/task.component';
import { NavComponent } from './nav/nav.component';
import { ApiTaskComponent } from './api-task/api-task.component';
import {HttpClientModule} from'@angular/common/http'
import { TaskServices } from './Services/TextService';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TaskComponent,
    NavComponent,
    ApiTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TaskServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
