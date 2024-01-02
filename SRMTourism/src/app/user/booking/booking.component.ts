import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private router:Router){}
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  startDate: string = '';
  numberOfMembers: number | undefined; // Set the default value for "Number of Members"

  reserveNow() {
    // Handle the reservation logic here
    console.log('Reservation details:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      startDate: this.startDate,
      numberOfMembers: this.numberOfMembers
    });
    this.router.navigate(['/payment'])

  }

}
