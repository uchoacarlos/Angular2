import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component'
import { RouterModule } from '@angular/router';

const routes = [

  { path: 'login', component: LoginComponent },

  { path: 'create-account', component: CreateAccountComponent },
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SecurityRoutingModule { }
