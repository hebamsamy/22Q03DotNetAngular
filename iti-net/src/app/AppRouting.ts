import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApiTaskComponent } from "./api-task/api-task.component";
import { LoginComponent } from "./Components/account/login/login.component";
import { LogoutComponent } from "./Components/account/logout/logout.component";
import { SignupComponent } from "./Components/account/signup/signup.component";
import { CreateStudentComponent } from "./Components/Student/create-student/create-student.component";
import { StudentDetailsComponent } from "./Components/Student/student-details/student-details.component";
import { StudentListComponent } from "./Components/Student/student-list/student-list.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { TaskComponent } from "./task/task.component";

const myAppRoutes :Routes = [
    {path:"",component:StudentListComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"logout",component:LogoutComponent},
    {path:"student/create",component:CreateStudentComponent},
    {path:"student/edit/:id",component:CreateStudentComponent},
    {path:"student/details/:id",component:StudentDetailsComponent},
    {path:"apitask",component:ApiTaskComponent},
    {path:"todo",component:TaskComponent},
    {path:"**",component:NotfoundComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(myAppRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}