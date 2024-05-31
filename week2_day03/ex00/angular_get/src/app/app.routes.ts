import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './cards/cards.component';

export const routes: Routes = [
	{ path: 'cards', component: CardComponent },
	{ path: 'table', component: ProductComponent }
];
