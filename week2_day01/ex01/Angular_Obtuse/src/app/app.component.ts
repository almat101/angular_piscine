import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree';
import { MatTreeComponent } from './mat-tree/mat-tree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatTreeModule,MatTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Obtuse';
}
