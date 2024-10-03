import { Component, OnInit } from '@angular/core'; // Import OnInit
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../models/investment';

@Component({
  selector: 'app-investment-list',
  standalone: true,
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
  imports: [CommonModule, InvestmentListItemComponent, NgOptimizedImage]
})
export class InvestmentListComponent implements OnInit { // Implement OnInit

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
}
