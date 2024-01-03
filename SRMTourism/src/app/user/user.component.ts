import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  items:any;

  constructor(private router: Router, private apiService: ApiService) {
    apiService.getAllPackages().subscribe((resultData) => {
      console.log("resultdata"+resultData);
      this.items=resultData;

      console.log(resultData)
    })


  }

  logout() {
    // Add logic for logout (e.g., clear user session)
    console.log('Logout clicked');
    sessionStorage.removeItem("access_token")
    // Redirect to the login page or another desired page
    this.router.navigate(['/login']);
  }


  bookItem(item: any) {
    // Add logic to handle booking for the selected item
    this.router.navigate(['/booking'])
    console.log('Booking item:', item.name);
  }

}
