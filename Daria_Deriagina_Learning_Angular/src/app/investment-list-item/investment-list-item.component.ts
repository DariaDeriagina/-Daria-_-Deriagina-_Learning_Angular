import { Component, Input } from '@angular/core';
import { Investment } from "../models/investment";
import { CurrencyPipe, NgOptimizedImage } from "@angular/common";
import { InvestmentDetailsPipe } from "../pipes/investment-details.pipe";
import { InterestRateColorPipe } from "../pipes/interest-rate-color.pipe";
import { HoverHighlightDirective } from "../directives/hover-highlight.directive";
import { ShowDetailsOnHoverDirective } from "../directives/show-details-on-hover.directive";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.css'],
  imports: [
    CurrencyPipe,
    InvestmentDetailsPipe,
    InterestRateColorPipe,
    HoverHighlightDirective,
    ShowDetailsOnHoverDirective,
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule
  ]
})
export class InvestmentListItemComponent {
  @Input() investmentInput!: Investment;
  @Input() editInvestment!: (id: number) => void;
  @Input() deleteInvestment!: (id: number) => void;
}
