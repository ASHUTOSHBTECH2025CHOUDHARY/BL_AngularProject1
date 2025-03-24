import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz';
  message: string = 'Hello from BridgeLabz';
  imgUrl: string = 'assets/Bridgelabz.jpeg';
  url: string = 'https://www.bridgelabz.com';
  userName: string = '';
  errorMessage: string = '';

  onClick(event: Event): void {
    console.log("BridgeLabz logo clicked!", event);
    window.open(this.url, "_blank");
  }

  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!namePattern.test(this.userName)) {
      this.errorMessage = 'Invalid Name! It should start with an uppercase letter and have at least 3 characters.';
    } else {
      this.errorMessage = ''; // Clear error when valid
    }
  }

  resetUserName(): void {
    this.userName = '';
    this.errorMessage = '';
  }
}
