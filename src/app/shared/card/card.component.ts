import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  title!: string;
  @Input()
  content!: string;

  constructor(private http: HttpClient) {}

  // Function to be called when the button is clicked
  onButtonClick(): void {
    // Perform an HTTP request to your serverless function
    const request = this.http.post(
      'https://ng-september.bretta.io/functions/createCheckoutSession',
      {}
    );

    request.subscribe({
      next: (response) => {
        // Handle the response from the serverless function
        console.log(response);
        // You can add further logic here to process the response as needed
      },
      error: (error) => {
        // Handle any errors that occur during the request
        console.error(error);
        // You can display an error message to the user or take other actions as needed
      },
    });
  }
}
