import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Investment } from "./models/investment";
import {AsyncPipe, DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import { InvestmentListComponent } from "./investment-list/investment-list.component";
import { InvestmentService } from "./services/investment.service";
import { InvestmentListItemComponent } from "./investment-list-item/investment-list-item.component";
import {MatToolbar} from "@angular/material/toolbar";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, InvestmentListComponent, InvestmentListItemComponent, AsyncPipe, RouterLink, UpperCasePipe, DatePipe, MatToolbar,
  MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myDate = Date.now();
  title: string = 'Investment Calculator';
  sampleInvestment?: Investment;

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.getSampleInvestment();
  }

  getSampleInvestment(): void {
    const id = 1;
    this.investmentService.getInvestmentById(id).subscribe((investment) => {
      this.sampleInvestment = investment;
    });
  }


}
