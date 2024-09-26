import {Investment} from "../models/investment";

export const investmentsList: Investment[] = [
  {
    name: 'Retirement Fund',
    initialAmount: 10000,
    interestRate: 5,
    duration: 10,
    image: 'src/app/assets/images/college.jpeg',
    compoundFrequency: 'Annually'
  },
  {
    name: 'Home Renovation Fund',
    initialAmount: 5000,
    interestRate: 4,
    duration: 5,
    image: '../assets/images/homeRenovation.jpeg',
    compoundFrequency: 'Monthly'
  },
  {
    name: 'Emergency Fund',
    initialAmount: 15000,
    interestRate: 3,
    duration: 3,
    image:'../assets/images/emergency.jpeg',
    compoundFrequency: 'Quarterly'
  },
  {
    name: 'College Savings Plan',
    initialAmount: 20000,
    interestRate: 6,
    duration: 7,
    image: 'src/app/assets/images/college.jpeg',
    compoundFrequency: 'Bi-Annually'

  }
];
