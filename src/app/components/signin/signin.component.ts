import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: "",
    password: ""
  };

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', this.user.email);
          console.log(localStorage.setItem('token', res.token));
          this.router.navigate(['/data']);
        },
        err => console.log(err)
      )
  }

}
