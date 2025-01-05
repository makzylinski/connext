import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value).subscribe((response) => {
        if (response) {
          localStorage.setItem('token', response.token);
          console.log(response);
          this.authService.dispatchToken(response.token);
          this.userService.dispatchUser(response.userDetails);
          this.router.navigate(['/']);
        }
      });
      this.loginForm.reset();
    }
  }
}
