import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResultViewModel } from "../models/ResultViewModel";
import { ApiTask } from "../models/task";

@Injectable()
export class TaskServices{
    constructor(private http:HttpClient){}
    url:string=environment.apiURl
    addTask(task:ApiTask){
        return this.http.post<ResultViewModel>(this.url+ "Task/add",task)
    }
    getTask(){
        return this.http.get<ResultViewModel>( environment.apiURl+"Task/get")
    }
    deleteTask(id:number){
        return this.http.delete<ResultViewModel>(this.url+ "Task/delete?id="+id)
    }
    updateTask(task:ApiTask){
        return this.http.put<ResultViewModel>(this.url+"Task/put",task)
    }
}