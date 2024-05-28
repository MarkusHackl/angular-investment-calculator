export interface InputData {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
}

export interface OutputData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
