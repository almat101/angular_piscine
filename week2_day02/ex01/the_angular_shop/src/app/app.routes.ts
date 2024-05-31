import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent }, // Set Home as default route
	{ path: 'about', component: AboutComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' } // Redirect to Home if route not found
  ];
