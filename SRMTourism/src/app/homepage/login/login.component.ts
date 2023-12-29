import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      //let  { email, password } = this.loginForm.value;
      let bodyData = {
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password
      };
      console.log(bodyData)
      this.apiService.loginUser(bodyData).subscribe(data=>{
        alert("login success");
      },
        (error) => {
          alert('Invalid email or password. Please try again.'); // Display error message on login failure
          //console.error('Login error:', error);
        }
      );
    }
  }
}
