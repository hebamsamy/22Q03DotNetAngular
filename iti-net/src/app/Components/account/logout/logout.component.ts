import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private acc:AccountServices,private router:Router) { }

  ngOnInit(): void {
    this.acc.logout().subscribe(
      res=> {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        //
        this.router.navigateByUrl('login')
      },
      err=> alert(err)
    )
  }

}
