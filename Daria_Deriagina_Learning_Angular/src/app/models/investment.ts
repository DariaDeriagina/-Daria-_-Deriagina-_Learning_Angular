export interface Investment {
  name: string;
  initialAmount: number;
  interstRate: number;
  duraton: number;
  compoundFrequency?: string; //optional, maybe monthly or annualy
}
