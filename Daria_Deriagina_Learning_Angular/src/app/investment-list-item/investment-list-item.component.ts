import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Ensure Router is imported
import { Investment } from '../models/investment';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.scss'],
  imports: [CommonModule, NgOptimizedImage]
})

export class InvestmentListItemComponent implements OnInit {
  investment: Investment | undefined;
  investmentList: Investment[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router  // Ensure Router is injected
  ) {}

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(investments => {
      this.investmentList = investments;

      // Subscribe to paramMap changes to update the view when the URL changes
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.investmentList.findIndex(investment => investment.id === id);
          this.investment = this.investmentList[this.currentIndex];
        }
      });
    });
  }

  // Function to move backward in the array
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/investment', this.investmentList[this.currentIndex].id]);
    }
  }

  // Function to move forward in the array
  goForward(): void {
    if (this.currentIndex < this.investmentList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/investment', this.investmentList[this.currentIndex].id]);
    }
  }

  // Function to go back to the investment list view
  goBack(): void {
    this.router.navigate(['/investment']); // This navigates back to the list
  }
}
