// product.interface.ts
export interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	title: string;
	description: string;
	category: string;
	rating : {
		rate: number;
		count: number;
	}
}
