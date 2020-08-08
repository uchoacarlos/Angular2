import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [

    ],
    canActivate: [AuthGuard],
  },
  
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
    ]
  },

  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
