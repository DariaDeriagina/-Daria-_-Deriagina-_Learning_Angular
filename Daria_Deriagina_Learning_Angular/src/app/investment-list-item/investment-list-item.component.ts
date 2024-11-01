
import { Component, Input } from '@angular/core';
import { Investment } from "../models/investment";


@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.css']
})
export class InvestmentListItemComponent {
  @Input() investment!: Investment;

  onEdit() {

  }

  onDelete() {

  }
}
