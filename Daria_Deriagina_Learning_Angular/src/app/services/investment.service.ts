import { Injectable } from '@angular/core';
import { Investment } from '../models/investment';
import { Observable, of } from 'rxjs';
import { investmentsList } from '../data/mock-investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investments: Investment[] = investmentsList; // Local copy of investment data for CRUD operations

  constructor() {}

  // Step 6: Method to return an Observable of the investment array
  getInvestments(): Observable<Investment[]> {
    return of(this.investments); // Return an observable that emits mock investment data
  }

  // Additional CRUD methods can be added here
  // Step 9a: Get an Investment item by ID
  getInvestmentById(investmentId: number): Observable<Investment | undefined> {
    const investment = this.investments.find(investment => investment.id === investmentId);
    return of(investment);
  }

  // Step 9b: Add a new Investment item to the array
  addInvestment(newInvestment: Investment): Observable<Investment[]> {
    this.investments.push(newInvestment);
    return of(this.investments);
  }

  // Step 9c: Update an existing Investment item
  updateInvestment(updatedInvestment: Investment): Observable<Investment[]> {
    const index = this.investments.findIndex(investment => investment.id === updatedInvestment.id);
    if (index !== -1) {
      this.investments[index] = updatedInvestment;
    }
    return of(this.investments);
  }

  // Step 9d: Delete an Investment item by ID
  deleteInvestment(investmentId: number): Observable<Investment[]> {
    this.investments = this.investments.filter(investment => investment.id !== investmentId);
    return of(this.investments);
  }
}
