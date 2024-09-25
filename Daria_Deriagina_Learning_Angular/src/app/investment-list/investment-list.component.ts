import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
  imports: [CommonModule, InvestmentListItemComponent, NgOptimizedImage]
})

export class InvestmentListComponent {
  // Define the array with 4 content items
  investments: Investment[] = [
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
}
