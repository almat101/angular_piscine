import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


//const products = require('../../assets/store.json');

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
	products: Product[] = [];  // Array to hold product data
	constructor(private http: HttpClient) {}

	ngOnInit()  {

	  this.http.get<Product[]>('assets/store.json')
	  //or api 'https://fakestoreapi.com/products'
		.subscribe(data => this.products = data);
	}
  }
// export class CardComponent implements OnInit {
// 	products = products; // Use the imported constant

// 	ngOnInit() {
// 	  // ... (Optional: add any component initialization logic here)
// 	}
//   }
