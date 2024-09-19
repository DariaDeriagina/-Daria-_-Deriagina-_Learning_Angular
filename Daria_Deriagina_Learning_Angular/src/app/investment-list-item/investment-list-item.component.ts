import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  imports: [],
  templateUrl: './investment-list-item.component.html',
  styleUrl: './investment-list-item.component.scss'
})
export class InvestmentListItemComponent {
  @Input() investment: any;
}
