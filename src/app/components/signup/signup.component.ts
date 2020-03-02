import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    firstName: "",
    lastName: "",
    userName: "",
    age: null,
    height: null,
    weight: null,
    geb: null,
    email: "",
    password: ""
  };

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', this.user.email);
          this.router.navigate(['/data']);
        },
        err => console.log(err)
      )
  }

}
