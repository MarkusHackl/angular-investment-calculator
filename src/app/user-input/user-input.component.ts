import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private calcService: CalcService) {}

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    this.calcService.setInput({
      initialInvestment: this.initialInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn(),
      annualInvestment: this.annualInvestment(),
    });
    this.calcService.calculateInvestmentResults();

    // reset values on form submit
    this.initialInvestment = signal('0');
    this.annualInvestment = signal('0');
    this.expectedReturn = signal('5');
    this.duration = signal('10');
  }
}
