import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router) {}

  logout() {
    // Add logic for logout (e.g., clear user session)
    console.log('Logout clicked');
    // Redirect to the login page or another desired page
    this.router.navigate(['/login']);
  }
  

  
 
  items = [
    {
      imageUrl: 'assets/images/Hyderabad.jpg',
      name: 'Item 1',
      description: 'Description for Item 1',
      price: '$50',
    },
    {
      imageUrl: 'assets/images/Chennai.jpg',
      name: 'Item 2',
      description: 'Description for Item 2',
      price: '$75',
    },
    {
      imageUrl: 'assets/images/Delhi.jpg',
      name: 'Item 3',
      description: 'Description for Item 3',
      price: '$100',
    },
    {
      imageUrl: 'assets/images/Mumbai.jpg',
      name: 'Item 3',
      description: 'Description for Item 3',
      price: '$100',
    },
    {
      imageUrl: 'assets/images/Banglore.png',
      name: 'Item 3',
      description: 'Description for Item 3',
      price: '$100',
    },
    {
      imageUrl: 'assets/images/kerala.jpg',
      name: 'Item 3',
      description: 'Description for Item 3',
      price: '$100',
    },
    // Add more items as needed
  ];

  bookItem(item: any) {
    // Add logic to handle booking for the selected item
    this.router.navigate(['/booking'])
    console.log('Booking item:', item.name);
  }

}
