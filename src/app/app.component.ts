import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz'; 
  message: string = 'Click the BridgeLabz Logo to visit the website!';
  imgUrl: string = 'assets/Bridgelabz.jpeg';
  openBridgeLabz(): void {
    window.open('https://www.bridgelabz.com/', '_blank');
  }
}
