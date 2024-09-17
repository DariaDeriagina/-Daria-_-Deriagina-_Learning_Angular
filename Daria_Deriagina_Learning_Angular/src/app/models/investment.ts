export interface Investment {
  name: string;
  initialAmount: number;
  interestRate: number;
  duration: number;
  compoundFrequency?: string; //optional, maybe monthly or annualy
}
