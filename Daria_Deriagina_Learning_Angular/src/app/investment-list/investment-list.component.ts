import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';  // Import child component
import { InvestmentService } from '../services/investment.service';
import {Investment} from "../models/investment";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-investment-list',
  standalone: true,
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
  imports: [CommonModule, InvestmentListItemComponent, NgOptimizedImage, RouterLink]
})

export class InvestmentListComponent implements OnInit{
  displayColumns:string[] = ['id', 'investment name', 'initial amount', 'interest rate', 'duration', 'compound frequency'];
  investments: Investment[] = []; // Declare the investments property as an array of Investment

  // Step 7: Inject the InvestmentService using dependency injection
  constructor(private investmentService: InvestmentService) {
    // The constructor is primarily used for dependency injection
  }

  // Step 8: Use ngOnInit to retrieve the investment data from the service
  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe({
      next: (data: Investment[]) => this.investments = data, // Assign the fetched data to the investments array
      error: (err) => console.error('Error fetching investments', err), // Handle errors
      complete: () => console.log('Investment data fetch complete!') // Log completion
    });
  }

  deleteInvestment(id: number) {

  }


  editInvestment(id: number) {

  }


}

