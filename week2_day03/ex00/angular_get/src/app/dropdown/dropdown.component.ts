import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
	@Input() options: string[] = []; // Array of dropdown options
	@Output() selected = new EventEmitter<string>(); // Event to emit on selection

	isOpen = false; // Flag to track dropdown visibility

	toggleDropdown() {
		this.isOpen = !this.isOpen;
	  }

	  selectOption(option: string) {
		this.selected.emit(option);
		this.isOpen = false; // Close dropdown on selection
	  }

}
