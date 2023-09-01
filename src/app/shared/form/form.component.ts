import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  constructor(private fb: FormBuilder) {}

  feedbackForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    type: ['', Validators.required],
    description: ['', Validators.required],
    rating: [0, Validators.min(1)],
  });

  errorMsg = '';

  closeError() {
    this.errorMsg = '';
  }
}
