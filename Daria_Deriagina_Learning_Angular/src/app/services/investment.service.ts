import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Investment } from '../models/investment';
import { investmentsList } from '../data/mock-investment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investments = investmentsList;

  constructor(private router: Router) {}

  // Get all investments
  getInvestments(): Observable<Investment[]> {
    return of(this.investments);
  }

  // Get investment by ID
  getInvestmentById(id: number): Observable<Investment | undefined> {
    const investment = this.investments.find(investment => investment.id === id);
    return of(investment);
  }

  // Add a new investment
  addInvestment(newInvestment: Investment): Observable<void> {
    this.investments.push(newInvestment);
    return of();
  }

  // Update an existing investment
  updateInvestment(updatedInvestment: Investment): Observable<void> {
    const index = this.investments.findIndex(investment => investment.id === updatedInvestment.id);
    if (index !== -1) {
      this.investments[index] = updatedInvestment;
    }
    return of();
  }

  // Navigate to edit investment
  editInvestment(id: number): void {
    this.router.navigate(['/modify-investment', id]);
  }

  // Delete investment
  deleteInvestment(id: number): Observable<void> {
    const index = this.investments.findIndex(investment => investment.id === id);
    if (index !== -1) {
      this.investments.splice(index, 1);
    }
    return of();
  }

  // generateNewId(): number{
  //   return this.investments.length >0
  // }
}
