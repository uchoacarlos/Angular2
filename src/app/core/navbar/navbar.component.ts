import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {


  }

  logout() {
    this.authService.doLogout()
  }

  ngOnInit() {

   /* this.authService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar
    );*/
  }

}
