import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private calcService: CalcService) {}

  investments = this.calcService.outputData;
}
