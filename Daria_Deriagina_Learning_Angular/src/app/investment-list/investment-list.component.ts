import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';  // Import child component
import { InvestmentService } from '../services/investment.service'; // Step 7: Import the InvestmentService

@Component({
  selector: 'app-investment-list',
  standalone: true,
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
  imports: [CommonModule, InvestmentListItemComponent, NgOptimizedImage]
})

export class InvestmentListComponent {
  // Step 7: Inject the InvestmentService using dependency injection
  constructor(private investmentService: InvestmentService) {
    // The constructor is primarily used for dependency injection
  }
}

