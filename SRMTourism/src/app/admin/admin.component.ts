import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}
  addlocation(){
    return this.router.navigate(['/admin-add-location']) 
  }
  admin_view_reservation(){
    return this.router.navigate(['/admin-view-reservation'])
  }
admin_view_users(){
  return this.router.navigate(['/admin-view-users'])
}

}
