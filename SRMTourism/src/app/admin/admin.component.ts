import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}
  
addLocationandpackage() {
  this.router.navigate(['/admin-add-location'])
  console.log('Add Location clicked');
  // Add your logic for adding a location here
}

editLocationandpackage() {
  this.router.navigate(['/admin-add-location'])
  console.log('Edit Location clicked');
  // Add your logic for editing a location here
}


viewReservation() {
  this.router.navigate(['/admin-view-reservation'])
  console.log('View Reservation clicked');
  // Add your logic for viewing reservations here
}

viewUsers() {
  this.router.navigate(['/admin-view-users'])
  console.log('View Users clicked');
  // Add your logic for viewing users here
}

}
