import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCardComponent } from './my-card/my-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	RouterOutlet,
	MyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Acute';
}
