import { Injectable, signal } from '@angular/core';
import { InputData, OutputData } from './calc.model';

@Injectable({ providedIn: 'root' })
export class CalcService {
  private initialInvestment = 0;
  private duration = 0;
  private expectedReturn = 0;
  private annualInvestment = 0;

  outputData: OutputData[] = [];

  setInput(formInput: InputData) {
    this.initialInvestment = +formInput.initialInvestment;
    this.duration = +formInput.duration;
    this.expectedReturn = +formInput.expectedReturn;
    this.annualInvestment = +formInput.annualInvestment;
  }

  calculateInvestmentResults() {
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest = investmentValue - this.annualInvestment * year - this.initialInvestment;
      this.outputData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }
  }
}
