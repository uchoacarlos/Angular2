import { Injectable, EventEmitter } from '@angular/core';
import { User } from './login/user';
import { Register } from './create-account/register'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  endpoint: any = 'http://52.91.139.190/fsapi/users';
  currentUser = {};
  response: any;

  public userAuthenticated: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    public http: HttpClient,
    public router: Router) {}

  // Sign-up - cadastra o usuario
  signUp(register: Register) {
    this.http.post<Register>(`${this.endpoint}/auth/register-jwt`, register, httpOptions).subscribe(
      obj => {
        console.log('cadastro com sucesso');
        localStorage.setItem('access_token', JSON.stringify(obj));
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log('erro ao cadastrar');
      }
    );
  }

  // Sign-in - Faz login  do usuario
  login(user: User) {
    this.http.post<User>(`${this.endpoint}/login`, user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('access_token', JSON.stringify(obj));

        this.userAuthenticated = true;
        this.mostrarMenuEmitter.emit(true);

        this.router.navigateByUrl('/admin');
      },
      error => {
        console.log('erro ao logar');
      }
    );
  }

  // Pega o nome do usuario
  getUser() {
    this.response = localStorage.getItem('access_token');
    return JSON.parse(this.response).user.name;
  }

  getToken() {
    return localStorage.getItem('user');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  refresh(): void {
    window.location.reload();
}

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['login']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, httpOptions ).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
