import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="error-page">
      <h1>Something went wrong!💀</h1>
      <p>We are working to resolve the issue. Please try again later.</p>
      <button routerLink="/" class="back-button">Go Back to Home</button>
    </div>
  `,
  styles: [
    `
      .error-page {
        text-align: center;
        margin-top: 50px;
      }
      .back-button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: gold;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        color: black;
      }
      .back-button:hover {
        background-color: darkgoldenrod;
      }
    `,
  ],
})
export class ErrorPageComponent {}
