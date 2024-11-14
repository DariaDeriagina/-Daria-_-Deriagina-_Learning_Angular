
import { Component, Input } from '@angular/core';
import { Investment } from "../models/investment";
import {CurrencyPipe} from "@angular/common";


@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./investment-list-item.component.css']
})
export class InvestmentListItemComponent {
  @Input() investmentInput!: Investment;
  @Input() editInvestment!: (id: number) => void; // Accept edit function from parent
  @Input() deleteInvestment!: (id: number) => void;

  // onEdit() {
  //   this.editInvestment(this.investment.id);
  // }
  //
  // onDelete() {
  //   this.deleteInvestment(this.investment.id);
  // }
}
