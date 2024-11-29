export interface Investment {
  id: number;
  name: string;
  initialAmount: number;
  interestRate: number;
  duration: number;
  imageUrl?: string;
  compoundFrequency: string;
}

