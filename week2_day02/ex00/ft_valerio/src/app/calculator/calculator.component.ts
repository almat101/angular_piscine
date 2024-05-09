import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: 
  [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  form: FormGroup;
  result: number | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', [Validators.required]],
      operation: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.form.valid) {
      const value1 = this.form.value.input1;
      const value2 = this.form.value.input2;
      const operation = this.form.value.operation;
      let result;
  
      if (value1 < 0 || value2 < 0) {
        alert("Please enter positive numbers only.");
        return;
      }
      switch (operation) {
        case 'addition':
          result = value1 + value2;
          break;
        case 'subtraction':
          result = value1 - value2;
          break;
        case 'multiplication':
          result = value1 * value2;
          break;
        case 'division':
          if (value2 === 0)
          {
            alert("*sympathetic beep* Please enter a number different from zero");
            return;
          }
          result = value1 / value2;
          break;
        default:
          console.error("Unexpected operation:", operation);
      }
  
      console.log("Result:", result);
      this.result = result;
      
    }
  }
}
