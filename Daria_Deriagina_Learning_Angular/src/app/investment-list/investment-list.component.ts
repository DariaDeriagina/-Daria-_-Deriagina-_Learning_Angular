import { Component, OnInit } from '@angular/core';
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";
import {Router, RouterModule} from '@angular/router';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {InvestmentListItemComponent} from "../investment-list-item/investment-list-item.component";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {ShowDetailsOnHoverDirective} from "../directives/show-details-on-hover.directive";

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  standalone: true,
  styleUrls: ['./investment-list.component.css'],
  imports: [
    RouterModule, // Import RouterModule for routing functions
    NgForOf,
    InvestmentListItemComponent,
    NgIf,
    CurrencyPipe, HoverHighlightDirective, ShowDetailsOnHoverDirective
  ]
})

export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];
  error: String |null = null;


  constructor(private investmentService: InvestmentService, private router: Router) {}

  ngOnInit(): void {
    //this life cycle hook is a good place to fetch unit our data
    this.investmentService.getInvestments().subscribe({
      next:(data:Investment[])=>{
        this.investments = data;
        this.error = null;
        },
      error:err => {
        this.error = 'Error fetching investments';
        console.error("Error fetching investments", err)
      },
      complete:() => console.log ("Investments data fetch complete successfully! ")
    })

  }

  getInvestments(): void {
    this.investmentService.getInvestments().subscribe((investments) => {
      this.investments = investments;
    });
  }

  editInvestment(id: number): void {
    this.router.navigate(['/modify-investment', id]);
  }

  deleteInvestment(id: number): void {
    this.investmentService.deleteInvestment(id).subscribe(() => {
      this.getInvestments(); // Refresh the list after deletion
    });
  }

  onDelete(id:number) {
    this.investments=this.investments.filter(inv=>inv.id !== id);
  }

  onEdit(id:number) {
    //console.log("It is working");
    this.router.navigate(['modify-investment',id]);
  }
}
