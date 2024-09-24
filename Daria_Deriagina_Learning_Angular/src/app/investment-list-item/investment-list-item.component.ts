import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.scss'],
  imports: [CommonModule]
})
export class InvestmentListItemComponent {
  @Input() investment: any;
  @Input() isEven?: boolean;
}
