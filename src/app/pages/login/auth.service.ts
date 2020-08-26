import { Injectable } from '@angular/core';
import { User } from './user';
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
  endpoint: string = 'http://52.91.139.190/fsapi/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  response: any;

  constructor(
    private http: HttpClient,
    public router: Router) {}

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  login(user: User) {
    this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('access_token', JSON.stringify(obj));
        this.router.navigateByUrl('/admin');
      },
      error => {
        console.log('erro ao logar');
      }
    );
  }

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

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
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
