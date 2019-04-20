import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isAdminVal: boolean;
  public constructor() { }

  public ngOnInit(): void {
    this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
  }

}
