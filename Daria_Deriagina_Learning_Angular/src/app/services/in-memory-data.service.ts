import { InMemoryDbService } from "angular-in-memory-web-api";
import {Investment} from "../models/investment";


export class InMemoryDataService implements InMemoryDbService {

  createDb():{investments:Investment[]}{
    const investments: Investment[] = [
      {
        id: 1,
        name: 'Retirement Fund',
        initialAmount: 10000,
        interestRate: 5,
        duration: 10,
        imageUrl:  "/assets/images/retirement.jpeg",
        compoundFrequency: 'Annually'
      },
      {
        id: 2,
        name: 'Home Renovation Fund',
        initialAmount: 5000,
        interestRate: 4,
        duration: 5,
        imageUrl: "/assets/images/homeRenovation.jpeg",
        compoundFrequency: 'Monthly'
      },
      {
        id: 3,
        name: 'Emergency Fund',
        initialAmount: 15000,
        interestRate: 3,
        duration: 3,
        imageUrl:"/assets/images/emergency.jpeg",
        compoundFrequency: 'Quarterly'
      },
      {
        id: 4,
        name: 'College Savings Plan',
        initialAmount: 20000,
        interestRate: 6,
        duration: 7,
        imageUrl: "/assets/images/college.jpeg",
        compoundFrequency: 'Bi-Annually'

      }
    ];
    return {investments};
  }

}
