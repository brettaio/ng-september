import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formData: any = {};

  submitForm() {
    // Handle form submission here (e.g., send data to a server).
    console.log('Form submitted:', this.formData);
  }
}
