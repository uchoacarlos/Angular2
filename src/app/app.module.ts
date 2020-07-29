import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PrimeiroComponenteComponent } from './pages/primeiro-componente/primeiro-componente.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthService } from './pages/login/loginService/auth.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    NavbarComponent,
    ContatoComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
