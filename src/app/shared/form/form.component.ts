import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/feedback/feedback';
import { NetlifyFormsService } from 'src/app/netlify-forms/netlify-forms.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
  ) {}

  feedbackForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.nullValidator]],
    lastName: ['', [Validators.required, Validators.nullValidator]],
    email: [
      '',
      [Validators.email, Validators.required, Validators.nullValidator],
    ],
    type: ['', [Validators.required, Validators.nullValidator]],
    description: ['', [Validators.required, Validators.nullValidator]],
    rating: [0, [Validators.min(1), Validators.nullValidator]],
  });

  errorMsg = '';

  closeError() {
    this.errorMsg = '';
  }
  onSubmit() {
    const formData: Feedback = {
      firstName: this.feedbackForm.get('firstName')?.value || '',
      lastName: this.feedbackForm.get('lastName')?.value || '',
      email: this.feedbackForm.get('email')?.value || '',
      type: this.feedbackForm.get('type')?.value || '',
      description: this.feedbackForm.get('description')?.value || '',
      rating: this.feedbackForm.get('rating')?.value || 0,
    };

    this.netlifyForms.submitFeedback(formData).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigateByUrl('/success');
      },
      (err) => {
        this.errorMsg = err;
      }
    );
  }
}
