import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  adminBtn: string;
  loginBtn: string;
  homeBtn: string;

  constructor() { 
    this.homeBtn = "Home";
    this.loginBtn = "Login";
    this.adminBtn = "Admin";
  }

  ngOnInit(): void {
  }
  menuBtnClick(cmp:any):any{
    alert(cmp.text);
  }

}
