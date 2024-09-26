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

  // Step 6: Method to return an Observable of the investment array
  getInvestments(): Observable<Investment[]> {
    return of(this.investments); // Return an observable that emits mock investment data
  }

  // Additional CRUD methods can be added here
}
