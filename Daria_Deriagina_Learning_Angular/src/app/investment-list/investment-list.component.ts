import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';  // Import child component

interface Investment {
  name: string;
  initialAmount: number;
  interestRate: number;
  duration: number;
  compoundFrequency: string;
  image: string;
}
@Component({
  selector: 'app-investment-list',
  standalone: true,
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
  imports: [CommonModule, InvestmentListItemComponent]
})

export class InvestmentListComponent {
  // Define the array with 4 content items
  investments: Investment[] = [
    {
      name: 'Retirement Fund',
      initialAmount: 10000,
      interestRate: 5,
      duration: 10,
      compoundFrequency: 'Annually',
      image: 'src/app/assets/images/college.jpeg'
    },
    {
      name: 'Home Renovation Fund',
      initialAmount: 5000,
      interestRate: 4,
      duration: 5,
      compoundFrequency: 'Monthly',
      image: 'assets/images/home renovation.jpeg'
    },
    {
      name: 'Emergency Fund',
      initialAmount: 15000,
      interestRate: 3,
      duration: 3,
      compoundFrequency: 'Quarterly',
      image: 'assets/images/emergency.jpeg'
    },
    {
      name: 'College Savings Plan',
      initialAmount: 20000,
      interestRate: 6,
      duration: 7,
      compoundFrequency: 'Bi-Annually',
      image: 'assets/images/college.jpeg'
    }
  ];
}
