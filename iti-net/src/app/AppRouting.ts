import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ApiTaskComponent } from "./api-task/api-task.component";
import { LoginComponent } from "./Components/account/login/login.component";
import { LogoutComponent } from "./Components/account/logout/logout.component";
import { SignupComponent } from "./Components/account/signup/signup.component";
import { HomeComponent } from "./Components/home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { TaskComponent } from "./task/task.component";
import { AuthGuard } from "./Guards/auth.guard";

const myAppRoutes :Routes = [
    {path:"",component:HomeComponent},
    {path:"login/:id",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"logout",component:LogoutComponent},
    {path:"apitask",component:ApiTaskComponent},
    {path:"todo",component:TaskComponent},
    {
        path: 'dapartment', 
        loadChildren: () => import('./Components/department/department.module').then(m => m.DepartmentModule),
        canActivate:[AuthGuard]
    },
    {
        path: 'student', 
        loadChildren: () => import('./Components/Student/student.module').then(m => m.StudentModule),
        canActivate:[AuthGuard]
    },
    {path:"**",component:NotfoundComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(myAppRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}