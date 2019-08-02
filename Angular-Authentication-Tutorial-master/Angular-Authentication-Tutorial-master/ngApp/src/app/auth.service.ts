import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
//import {HttpHeaders} from '@angular/http'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8080/register";
  private _loginUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user, {headers:  new HttpHeaders().set('Content-Type', 'application/json'), observe: "response"})
  
  }

  logoutUser() {
    localStorage.removeItem('token')
    //this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
