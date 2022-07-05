import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentServices } from 'src/app/Services/StudentServices';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 loading:boolean=true;
  Students:Student[]=[];
  constructor(private StdServices:StudentServices) { }

  ngOnInit(): void {
    this.loading = true
    this.StdServices.getStudent().subscribe(res=>{
      this.Students= res.Data;
      this.loading =false
    })
  }
  

}
