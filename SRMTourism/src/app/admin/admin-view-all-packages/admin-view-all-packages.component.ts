import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-all-packages',
  templateUrl: './admin-view-all-packages.component.html',
  styleUrls: ['./admin-view-all-packages.component.css']
})
export class AdminViewAllPackagesComponent implements OnInit{
  
  constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
   items = [
    {
      imageUrl: 'assets/images/Hyderabad.jpg',
      name: 'Charminar',
      description: 'Known as the "City of Pearls," Hyderabad seamlessly blends its rich history with modernity. Visit the historic Charminar and the impressive Golconda Fort. Explore the vibrant markets of Laad Bazaar and sample the world-famous Hyderabadi biryani. Don\'t miss the enchanting Hussain Sagar Lake and the high-tech district of HITEC City.',
      price: '$50',
      location: 'Hyderabad',
    },
    {
      imageUrl: 'assets/images/Chennai.jpg',
      name: 'Mahakali Temple',
      description: 'Chennai, the capital of Tamil Nadu, is a city with a deep cultural heritage. Explore the ancient temples like Kapaleeshwarar and Parthasarathy, showcasing Dravidian architecture. Marina Beach, one of the longest urban beaches, offers a serene retreat. Discover the vibrant arts scene at Kalakshetra and enjoy the local cuisine known for its dosas and filter coffee.',
      price: '$75',
      location: 'Chennai',
    },
    {
      imageUrl: 'assets/images/Delhi.jpg',
      name: 'Taj Mahal',
      description: 'As India\'s capital, Delhi is a captivating blend of history and modernity. Visit the iconic Red Fort, India Gate, and Humayun\'s Tomb. Explore the bustling markets of Chandni Chowk and savor street food delicacies. Experience spiritual serenity at the Lotus Temple and Akshardham. Delhi offers a glimpse into India\'s diverse past and present.',
      price: '$100',
      location: 'Delhi',
    },
    {
      imageUrl: 'assets/images/Mumbai.jpg',
      name: 'Taj Hotel',
      description: 'The "City of Dreams," Mumbai is a vibrant metropolis with a unique charm. Explore the Gateway of India and Marine Drive for stunning views. Embrace the bustling atmosphere of Colaba Causeway and visit Bollywood\'s Film City. Relax at Juhu Beach and delve into the city\'s rich history at Chhatrapati Shivaji Maharaj Vastu Sangrahalaya.',
      price: '$100',
      location: 'Mumbai',
    },
    {
      imageUrl: 'assets/images/Banglore.png',
      name: 'Lal Bagh',
      description: 'The "Garden City" of India, Bangalore is a hub of technology and green spaces. Visit Lalbagh Botanical Garden and Cubbon Park for a breath of fresh air. Explore the Bangalore Palace and the historic Bull Temple. The city\'s vibrant nightlife and diverse culinary scene add to its dynamic charm.',
      price: '$100',
      location: 'Banglore',
    },
    {
      imageUrl: 'assets/images/kerala.jpg',
      name: 'Boat hut',
      description: 'Known as "God\'s Own Country," Kerala is a tropical paradise. Enjoy the serene backwaters of Alleppey and Kumarakom, surrounded by lush greenery. Experience the rich culture of Kochi with its Chinese fishing nets and historic Fort Kochi. Explore the pristine beaches of Kovalam and the tranquil tea plantations of Munnar.',
      price: '$100',
      location:'Kerala'
    },
    // Add more items as needed
  ];
  // editpackage(){
  //   this.router.navigate(['admin/edit-package/:id'])
  // }

  bookItem(item: any) {
    // Add logic to handle booking for the selected item
    // Add logic to handle booking for the selected item
    this['router'].navigate(['/edit-package'])
    console.log('Booking item:', item.name);
  }


  


}
