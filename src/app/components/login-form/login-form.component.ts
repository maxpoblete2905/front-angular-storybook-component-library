import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInterface } from './login.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css']
})
export class LoginForm {
  loginForm: FormGroup;
  showSuccessMessage = false;

  @Output() loginSubmit = new EventEmitter<LoginInterface>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;

      // Emit the form values to the parent component
      this.loginSubmit.emit({
        email: formValue.email,
        password: formValue.password
      });

      // Show success message (as shown in your Storybook story)
      this.showSuccessMessage = true;

      // Optional: Reset form after submission
      setTimeout(() => {
        this.loginForm.reset();
        this.showSuccessMessage = false;
      }, 3000);
    }
  }
}