import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-view-all-packages',
  templateUrl: './admin-view-all-packages.component.html',
  styleUrls: ['./admin-view-all-packages.component.css']
})
export class AdminViewAllPackagesComponent{
  items:any;

  constructor(private router: Router, private apiService: ApiService) {
    apiService.getAllPackages().subscribe((resultData) => {
      console.log("resultdata"+resultData);
      this.items=resultData;

      console.log(resultData)
    })


  }

  // editpackage(){
  //   this.router.navigate(['admin/edit-package/:id'])
  // }

  adminaddpackage() {
    this['router'].navigate(['/edit-package'])
    //console.log('Booking item:', item.name);
  }
}
