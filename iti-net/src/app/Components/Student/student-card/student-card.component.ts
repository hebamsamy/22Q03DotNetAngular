import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentServices } from 'src/app/Services/StudentServices';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

@Input() std :Student = new Student();
@Output() Del = new EventEmitter<number>();
  constructor(private StdServices:StudentServices ) { }

  ngOnInit(): void {
  }
  toBeDelete(ID:number){
    this.Del.emit(ID);
  }
}
