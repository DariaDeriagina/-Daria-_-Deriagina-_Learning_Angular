import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrencyPipe} from "@angular/common";
import {Investment} from "../models/investment";
import {InvestmentService} from "../services/investment.service";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {InvestmentListItemComponent} from "../investment-list-item/investment-list-item.component";
import {InvestmentDetailsPipe} from "../pipes/investment-details.pipe";
import {InterestRateColorPipe} from "../pipes/interest-rate-color.pipe";


@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  standalone: true,
  styleUrls: ['./investment-list.component.css'],
  imports: [
    MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatButton,
    NgForOf, NgIf, CurrencyPipe, HoverHighlightDirective, InvestmentListItemComponent, MatCardModule,
    MatButtonModule, InvestmentDetailsPipe, InterestRateColorPipe
  ]
})
export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];
  error: string | null = null;

  constructor(private investmentService: InvestmentService, private router: Router) {}

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe({
      next: (data: Investment[]) => {
        this.investments = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching investments';
        console.error("Error fetching investments", err);
      }
    });
  }

  onEdit(id: number): void {
    this.router.navigate(['modify-investment', id]);
  }

  onDelete(id: number): void {
    this.investments = this.investments.filter(inv => inv.id !== id);
  }
}
