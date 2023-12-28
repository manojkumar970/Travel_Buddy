import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  //constructor(private router: Router) {}

  navigateToRegistration() {
    // Navigate to the registration page
    //this.router.navigate(['/registration']);
    
      
      //new RouterLink('/registration');
  }

}
