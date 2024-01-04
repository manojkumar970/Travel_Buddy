import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  items:any;
  userId:any;
  
  constructor(private router: Router, private apiService: ApiService,private route:ActivatedRoute) {
    apiService.getAllPackages().subscribe((resultData) => {
      console.log("resultdata"+resultData);
      this.items=resultData;
      console.log(resultData)
    })


  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
  }
  

  logout() {
    console.log('Logout clicked');
    sessionStorage.removeItem("access_token")
    this.router.navigate(['/login']);
  }


  bookItem(item: any) {
    this.router.navigate(['/booking'],{ queryParams: { id: item.id , uId :this.userId}})
    console.log('Booking item:', item.name);
  }

}
