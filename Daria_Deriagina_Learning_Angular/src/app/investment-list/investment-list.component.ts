import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { InvestmentListItemComponent } from '../investment-list-item/investment-list-item.component';  // Import child component


@Component({
  selector: 'app-investment-list',
  standalone: true,
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
  imports: [CommonModule, InvestmentListItemComponent, NgOptimizedImage]
})

export class InvestmentListComponent {
  // Define the array with 4 content items

}

