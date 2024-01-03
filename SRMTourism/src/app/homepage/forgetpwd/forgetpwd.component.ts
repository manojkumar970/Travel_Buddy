import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent {
  email: string = '';

  submitForm() {
    // Handle form submission logic here
    console.log('Email submitted:', this.email);
    alert("Reset link sent to your email")
    // You can implement further logic, e.g., sending the email to a backend server
  }

}
