import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent {
  package: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  saveChanges(): void {
    // Save the updated package details
   this.router.navigate(['/admin-view-all-packages'])
  }

}
