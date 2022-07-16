import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { AccountServices } from 'src/app/Services/Account';
import { StudentServices } from 'src/app/Services/StudentServices';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 loading:boolean=true;
  Students:Student[]=[];
  constructor(private StdServices:StudentServices,private account:AccountServices,private router:Router) { }

  ngOnInit(): void {
    // if(!this.account.IsLoggedIn())
    // {
    //     this.router.navigateByUrl('login');
    // }
    this.loading = true
   this.show();
  }
  show(){
    this.StdServices.getStudent().subscribe(res=>{
      this.Students= res.Data;
      this.loading =false
    })
  }
  Delete(ID:number){
    this.loading = true;
    this.StdServices.deleteStudent(ID).subscribe(
      res=>{
        alert(res.Message);
        this.loading =false
        this.show();
      },
      err=>{
        alert(err.Message);
        this.loading =false
        this.show();
      });
  }
  Rate(val :number){
    console.log('list',val)
    alert(val)
  }
}
