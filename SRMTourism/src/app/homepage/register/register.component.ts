import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Add logic to handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
    }
  }

}
