import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Investment } from './models/investment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Investment';

  investments: Investment[] = [
    {
      name: 'Retirement Fund',
      initialAmount: 10000,
      interestRate: 5,
      duration: 10,
      compoundFrequency: 'monthly',
    },
    {
      name: 'College Fund',
      initialAmount: 5000,
      interestRate: 3.5,
      duration: 8,
    },
    {
      name: 'Savings Account',
      initialAmount: 1500,
      interestRate: 1.2,
      duration: 2,
      compoundFrequency: 'annually',
    },
    {
      name: 'Business Investment',
      initialAmount: 20000,
      interestRate: 7,
      duration: 5,
      compoundFrequency: 'quarterly',
    },
    {
      name: 'Vacation Savings',
      initialAmount: 3000,
      interestRate: 2,
      duration: 3,
    },
    {
      name: 'Emergency Fund',
      initialAmount: 5000,
      interestRate: 1,
      duration: 1,
      compoundFrequency: 'monthly',
    },
  ];
}
