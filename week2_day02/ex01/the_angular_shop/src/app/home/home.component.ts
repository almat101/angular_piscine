import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	featuredProducts = [
		{ id: 1, name: 'Product 1', image: 'assets/product1.jpg', price: 29.99 },
		{ id: 2, name: 'Product 2', image: 'assets/product2.jpg', price: 49.99 },
		// ... add more featured products
	  ];
	shopName = 'The Angular Shop';
}
