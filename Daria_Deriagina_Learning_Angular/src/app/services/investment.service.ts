import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Investment } from '../models/investment';
import { investmentsList } from '../data/mock-investment'; // Assuming you have a mock-data file

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investments = investmentsList;

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

  // Delete investment by ID
  deleteInvestment(id: number): Observable<void> {
    this.investments = this.investments.filter(investment => investment.id !== id);
    return of();
  }
}
