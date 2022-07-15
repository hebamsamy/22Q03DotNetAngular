import { Component, OnInit } from '@angular/core';
import { AccountServices } from '../Services/Account';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private Acc:AccountServices) { }
  ISLOG:Boolean = false;
  UserName:string = "";
  ngOnInit(): void {
    this.ISLOG = this.Acc.IsLoggedIn()
    //
  }

}
