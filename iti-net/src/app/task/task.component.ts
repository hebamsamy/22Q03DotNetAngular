import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  text:string="";
  tasks:Task[] = [];

  constructor() { }
  // changeName(){
  //   this.text ="bichoy";
  // }
  // getName(val :string){
  //   this.text =val;
  // }
  add(){
    this.tasks.push(new Task(this.text))
  }
  change(id: number){
    this.tasks.forEach(t=>{
      if(t.Id == id)
      {
        t.IsDone =!t.IsDone
      }
    })

  }
  del(id:number){
    let ind = this.tasks.findIndex(t=>t.Id ==id);
    this.tasks.splice(ind,1)
  }
}
