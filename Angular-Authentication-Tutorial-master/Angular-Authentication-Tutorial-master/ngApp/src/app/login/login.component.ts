import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        //console.log(res.headers)
        //console.log(res.headers.get('Authorization'))
        localStorage.setItem('token', res.headers.get('Authorization'))
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

}
