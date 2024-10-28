import { Injectable } from '@angular/core';
import {Investment} from "../models/investment";
import {investmentsList} from "../data/mock-investment";
import { Observable, of } from 'rxjs';
 // Update the path as needed

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investments: Investment[] = investmentsList; // Local copy of investment data for CRUD operations

  constructor() {}

   // Update the Service to handle CRUD
  getInvestments(): Observable<Investment[]> {
    return of(this.investments); // Return an observable that emits mock investment data
  }

  // Additional CRUD methods can be added here

  getInvestmentById(investmentId: number): Observable<Investment | undefined> {
    const investment = this.investments.find(investment => investment.id === investmentId);
    return of(investment);
  }
  // Method to add a new investment
  addInvestment(newInvestment: Investment): Observable<Investment[]> {
    this.investments.push(newInvestment); // Assuming investments is the array of Investment items
    return of(this.investments);
  }

// Method to update an existing investment
  updateInvestment(updatedInvestment: Investment): Observable<Investment[]> {
    const index = this.investments.findIndex(investment => investment.id === updatedInvestment.id);
    if (index !== -1) {
      this.investments[index] = updatedInvestment;
    }
    return of(this.investments);
  }
  // Update the Service to handle CRUD
  deleteInvestment(investmentId: number): Observable<Investment[]> {
    this.investments = this.investments.filter(investment => investment.id !== investmentId);
    return of(this.investments);
  }
}
