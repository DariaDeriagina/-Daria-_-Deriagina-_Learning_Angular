import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Investment} from "../models/investment";
import {InvestmentService} from "../services/investment.service";



@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  styleUrls: ['./investment-list-item.component.scss'],
  imports: [CommonModule, NgOptimizedImage]
})

export class InvestmentListItemComponent implements OnInit {
  investment: Investment | undefined;
  investmentList: Investment[] = [];
  currentIndex: number = 0;


  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    // private router: Router
  ) {}

// /rewrite onInit to get the list of students and the current student
  //rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(users => {
      this.investmentList = users;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.investmentList.findIndex(user => user.id === id);
          this.investment = this.investmentList[this.currentIndex];
        }
      });
    });
  }


  goBackward() {

  }

  goForward() {

  }

  goBack() {

  }


}







