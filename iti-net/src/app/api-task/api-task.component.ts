import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResultViewModel } from '../models/ResultViewModel';
import { ApiTask } from '../models/task';
import { TaskServices } from '../Services/TextService';

@Component({
  selector: 'app-api-task',
  templateUrl: './api-task.component.html',
  styleUrls: ['./api-task.component.css']
})
export class ApiTaskComponent implements OnInit {

  tasks:ApiTask[]=[];
  text:string ='';
  currentdate = new Date();
  constructor(private ts:TaskServices) { }

  ngOnInit(): void {
   this.list();
  }
  list(){
    this.ts.getTask().subscribe( responce=>{
      this.tasks = responce.Data;
    })
  }

  add(){
    let newTask = new ApiTask(this.text);
    this.ts.addTask(newTask)
    .subscribe(
      res=>{
        if(res.Success){
          alert(res.Message);
        }
      }
    )
    this.list();
  }
  del(Id:number){

  }
  change(id:number){

  }

}
