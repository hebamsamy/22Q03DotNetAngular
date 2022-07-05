import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentServices } from 'src/app/Services/StudentServices';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  std:Student=new Student;
  constructor( private StdSerivce:StudentServices,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any;
    // this.route.paramMap.subscribe(p=> id= p.get('id'))
    id= this.route.snapshot.params['id'];
    console.log(id)
    this.StdSerivce.getStudentById(id).subscribe(res=>this.std = res.Data)
  }

}
