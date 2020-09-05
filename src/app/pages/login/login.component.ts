import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;

 erros: string[];
 submit: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    

    this.loginForm = this.fb.group({
      'email': [''],
      'password': ['']
    })
   }

  loginUser() {
    this.submit = false;
    this.authService.login(this.loginForm.value)
  }
}

