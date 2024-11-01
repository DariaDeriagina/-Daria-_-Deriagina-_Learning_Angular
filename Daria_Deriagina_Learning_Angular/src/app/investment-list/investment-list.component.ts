import { Component, OnInit } from '@angular/core';
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";
import {Router, RouterModule} from '@angular/router';
import { NgForOf } from "@angular/common";
import {InvestmentListItemComponent} from "../investment-list-item/investment-list-item.component";

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  standalone: true,
  styleUrls: ['./investment-list.component.css'],
  imports: [
    RouterModule, // Import RouterModule for routing functions
    NgForOf,
    InvestmentListItemComponent,
    // Import NgForOf to loop through investments in template
  ]
})

export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];

  constructor(private investmentService: InvestmentService, private router: Router) {}

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments(): void {
    this.investmentService.getInvestments().subscribe((investments) => {
      this.investments = investments;
    });
  }

  editInvestment(id: number): void {
    this.router.navigate(['/modify-investment', id]);
  }

  deleteInvestment(id: number): void {
    this.investmentService.deleteInvestment(id).subscribe(() => {
      this.getInvestments(); // Refresh the list after deletion
    });
  }
}
