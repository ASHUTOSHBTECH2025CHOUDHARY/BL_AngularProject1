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

  onClick(event: Event): void {
    console.log("BridgeLabz logo clicked!", event);
    window.open(this.url, "_blank");
  }
}
