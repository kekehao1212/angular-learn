import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.pipe(
      tap(_ => this.loginError = '')
    ).subscribe(x => console.log(x));
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/todos']);
      },
      error: error => {
        this.loginError = error;
      }
    });
  }
  forgotPassword(username: string) {
    console.log(username);
  }
}
