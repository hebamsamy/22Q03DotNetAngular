import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { loginViewModel, SignUpViewModel } from "../models/Account";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class AccountServices{
    constructor(private http:HttpClient){

    }
    login(log :loginViewModel){
        return this.http.post<ResultViewModel>(environment.apiURl+'user/login',log);
    }
    signup(log :SignUpViewModel){
        return this.http.post<ResultViewModel>(environment.apiURl+'user/post',log);
    }
    logout(){
        let token=localStorage.getItem('token')
        return this.http.post<ResultViewModel>(environment.apiURl,{token:token});
    }
    IsLoggedIn():boolean{
        let token =localStorage.getItem('token')
        if(token != null){
            return true;
        }
        return false;
    }
}