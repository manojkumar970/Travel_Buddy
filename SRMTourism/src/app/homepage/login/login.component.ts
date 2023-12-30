import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: string = '';

  constructor(private router: Router,private fb: FormBuilder, private apiService: ApiService) {}

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
      //let  { email, password } = this.loginForm.value;
      let bodyData = {
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password
      };
      console.log(bodyData)
      this.apiService.loginUser(bodyData).subscribe(data=>{
        console.log(data)
        if(data.status){
          this.router.navigate(['/user']);
        }else{
          alert("login unsuccessfull");
        }
        
      });
  }
}