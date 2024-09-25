export interface Investment {
  name: string,
  initialAmount: number,
  interestRate: number,
  duration: number,
  image: string,
  compoundFrequency?: string; //optional, maybe monthly or annualy
}
