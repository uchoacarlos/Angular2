import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AuthGuard } from './guards/auth.guard'
import { AdminComponent } from './pages/admin/admin.component';
import { AdminFormComponent } from './pages/admin/admin-form/admin-form.component';
import { AdminDetalheComponent } from './pages/admin/admin-detalhe/admin-detalhe.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'create-account', component: CreateAccountComponent },
  {
    path: 'admin', component: AdminComponent, children: [

      { path: 'new', component: AdminFormComponent },
      { path: ':id', component: AdminDetalheComponent },
      { path: ':id/edit', component: AdminFormComponent },

    ], 
    canActivate: [AuthGuard], //canActivateChild: [AdminGuard]
  },

  { path: 'contato', component: ContatoComponent, canActivate: [AuthGuard] },
  { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard] },

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
