import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUsername: string = '';
  adminPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Simulate authentication
    const validAdminUsername = 'admin';
    const validAdminPassword = 'admin123';

    if (this.adminUsername === validAdminUsername && this.adminPassword === validAdminPassword) {
      // Authentication successful
      console.log('Admin authentication successful');

      // Navigate to the next page (e.g., admin dashboard)
      this.router.navigate(['/admin dashboard']);
    } else {
      // Authentication failed
      console.log('Admin authentication failed');
      this.errorMessage = 'Invalid credentials. Please try again.';
      // You might display an error message on the UI
    }
  }
  
}
