import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';

@Component({
  selector: 'app-investment-list',
  standalone: true, // This marks the component as standalone
  imports: [CommonModule, InvestmentListItemComponent], // Import necessary modules
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent {
  // Define your investments array
  investments = [
    {
      name: 'Investment A',
      initialAmount: 10000,
      interestRate: 5,
      duration: 10,
      compoundFrequency: 'Annually'
    },
    {
      name: 'Investment B',
      initialAmount: 5000,
      interestRate: 4,
      duration: 5,
      compoundFrequency: 'Monthly'
    },
    {
      name: 'Investment C',
      initialAmount: 15000,
      interestRate: 3,
      duration: 3,
      compoundFrequency: 'Quarterly'
    },
    {
      name: 'Investment D',
      initialAmount: 20000,
      interestRate: 6,
      duration: 7,
      compoundFrequency: 'Bi-Annually'
    }
  ];
}
