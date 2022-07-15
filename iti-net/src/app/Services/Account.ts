import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { loginViewModel, SignUpViewModel } from "../models/Account";
import { ResultViewModel } from "../models/ResultViewModel";
import { Subject } from "rxjs";

@Injectable()
export class AccountServices{
    Logged:Subject<boolean> = new Subject<boolean>();
    constructor(private http:HttpClient){
        this.Logged.next(this.IsLoggedIn());
    }
    getLooggedStatus(){
       return this.Logged.asObservable();
    }
    setLooggedStatus(status:boolean){
        return this.Logged.next(status);
     }
    login(log :loginViewModel){
        return this.http.post<ResultViewModel>(environment.apiURl+'user/login',log);
    }
    signup(log :SignUpViewModel){
        return this.http.post<ResultViewModel>(environment.apiURl+'user/post',log);
    }
    logout(){
        let token=localStorage.getItem('token');
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'token': `${token}`,
         });
        let options = { headers: headers };
        return this.http.post<ResultViewModel>(`${environment.apiURl}user/logout`,null,options);
    }
    IsLoggedIn():boolean{
        let token =localStorage.getItem('token')
        if(token != null){
            return true;
        }
        return false;
    }
}