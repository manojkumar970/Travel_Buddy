import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String = "";
  email: String = "";
  address: String = "";
  mobile: any = "";
  gender: any = "";
  password: String = "";
  
  

  


  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if(this.registrationForm.valid) {

      let user = {
        "name": this.registrationForm.value.name,
        "email": this.registrationForm.value.email,
        "address": this.registrationForm.value.address,
        "mobile": this.registrationForm.value.mobile,
        "gender": this.registrationForm.value.gender,
        "password": this.registrationForm.value.password
      };
      console.log(user);
      this.apiService.register(user).subscribe((resultData: any) => {
        alert("Employee Registered Successfully");
        
      });
    
      
    }else{
      alert("Employee not Registered");
    }
  }



}
