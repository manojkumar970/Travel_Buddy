import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-location-package',
  templateUrl: './admin-add-location-package.component.html',
  styleUrls: ['./admin-add-location-package.component.css']
})
export class AdminAddLocationPackageComponent {
  tripForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.tripForm = this.formBuilder.group({
      placeName: ['', Validators.required],
      placeDescription: ['', Validators.required],
      numberOfDays: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      tripPackage: ['', Validators.required],
      placeImage: ['']
    });
  }

  onSubmit() {
    // Handle form submission logic here
    const formData = this.tripForm.value;
    console.log('Form Data:', formData);
    // Add your logic to send the form data to the server or perform other actions
  }
}
