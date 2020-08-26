import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private service: AuthService) { }

  userName: any;

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() { 
    this.userName = this.service.getUser();
    console.log('user name: ' + this.userName);
  }
}