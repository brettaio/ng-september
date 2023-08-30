import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor(private http: HttpClient) {}

  testButtonClick() {
    const observer = {
      next: (response: any) => {
        console.log('Serverless function response:', response);
      },
      error: (error: any) => {
        console.error('Error calling serverless function:', error);
      },
    };

    this.http
      .get('/.netlify/functions/testFunction')
      .pipe(
        tap((response) => observer.next(response)),
        catchError((error) => {
          observer.error(error);
          throw error;
        })
      )
      .subscribe();
  }
}
