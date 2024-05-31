import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router'; // Import Router for navigation
import { ProductComponent } from './product/product.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, DropdownComponent,RouterOutlet,CardComponent], // Import Router
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	routes: { path: string; component: any }[] = [
		{ path: '/cards', component: ProductComponent }, // Add leading slash
		{ path: '/table', component: ProductComponent }
	  ];
  title = 'angular_get';
  options = ['cards', 'table']; // Define dropdown options

  constructor(private router: Router) {} // Inject Router in the constructor

  onDropdownSelection(option: string) {
    console.log('Selected option:',option);
    this.router.navigate([`/${option}`]); // Simplified navigation using template literals
  }
}
