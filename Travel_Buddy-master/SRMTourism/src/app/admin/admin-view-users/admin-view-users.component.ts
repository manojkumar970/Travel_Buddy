import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent {

  users:any;

  constructor(private router: Router, private apiService: ApiService) {
    apiService.getAllUsers().subscribe((resultData:any) => {
      console.log(resultData);
      this.users=resultData;
      console.log(resultData)
    })


  }
  

}
