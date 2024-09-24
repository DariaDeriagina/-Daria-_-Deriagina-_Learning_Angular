import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.scss']
})
export class InvestmentListItemComponent {
  @Input() investment: any;
}
