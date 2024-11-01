import { Component, OnInit } from '@angular/core';
import { Investment } from "../models/investment";
import { InvestmentListItemComponent } from "../investment-list-item/investment-list-item.component";
import { NgForOf } from "@angular/common";
import { InvestmentService } from "../services/investment.service";


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

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments(): void {
    this.investmentService.getInvestments().subscribe((investments) => {
      this.investments = investments;
    });
  }
}
