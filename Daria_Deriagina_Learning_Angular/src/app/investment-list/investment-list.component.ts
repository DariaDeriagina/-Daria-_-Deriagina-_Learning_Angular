import { Component, OnInit } from '@angular/core';
import { Investment } from "../models/investment";
import { InvestmentListItemComponent } from "../investment-list-item/investment-list-item.component";
import { NgForOf } from "@angular/common";
import { InvestmentService } from "../services/investment.service";
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-investment-list',
  standalone: true,
  imports: [
    InvestmentListItemComponent,
    NgForOf,
  ],
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];

  constructor(
    private investmentService: InvestmentService,
    private router: Router // Inject Router here
  ) {}

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments(): void {
    this.investmentService.getInvestments().subscribe((investments) => {
      this.investments = investments;
    });
  }

  // Function to handle navigation to edit
  editInvestment = (id: number): void => {
    this.router.navigate(['/modify-investment', id]);
  };

  // Function to delete investment and refresh the list
  deleteInvestment = (id: number): void => {
    this.investmentService.deleteInvestment(id).subscribe(() => {
      this.getInvestments();
    });
  };
}
