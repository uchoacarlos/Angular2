import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
    this.createAccountForm = this.fb.group({
      login: [''],
      name: [''],
      email: [''],
      password: [''],
      confirma_password: [''],
      idEmpresa: [''],
      Status: [''],
      role: ['']
    })
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.signUp(this.createAccountForm.value).subscribe((res) => {
      if (res.result) {
        this.createAccountForm.reset()
        this.router.navigate(['login']);
      }
    })
  }

}
