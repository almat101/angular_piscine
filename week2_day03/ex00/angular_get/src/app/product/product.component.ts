import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports:[],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

	http = inject(HttpClient);
	products : any = [];

	ngOnInit(): void {
		this.getProducts();
	}
	getProducts(){
		this.http.get('https://fakestoreapi.com/products')
		.subscribe((products : any) => {
			console.log(products);
			this.products = products; // with this we are storing the products in the products array
		});
		//before doing this, we need to provide the HttpClient service to the application with provideHttpClient() in app.config.ts
	}
}
