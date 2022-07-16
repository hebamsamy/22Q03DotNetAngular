import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RateComponent } from './Components/rate/rate.component';
import { MaxlenghtPipe } from './maxlenght.pipe';

@NgModule({
  declarations: [
    RateComponent,
    MaxlenghtPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
  ,
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    RateComponent,
    MaxlenghtPipe,
  ]
})
export class SharedModule { }
