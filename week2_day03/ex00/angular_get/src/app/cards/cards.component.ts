import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';


//const products = require('../../assets/store.json');

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardComponent implements OnInit {
	products: Product[] = [];  // Array to hold product data
	constructor(private http: HttpClient) {}

	ngOnInit()  {

	  this.http.get<Product[]>('https://fakestoreapi.com/products')
		.subscribe(data => this.products = data);
	}
  }
