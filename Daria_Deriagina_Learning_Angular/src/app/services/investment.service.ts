import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from 'rxjs';
import { Investment } from '../models/investment';
import { investmentsList } from '../data/mock-investment';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private apiUrl = 'api/investments';
  //local copy to investment list
  private investments = investmentsList;

  constructor(private http:HttpClient) {}


  //CRUD
  //All operations we need are:
  //Get post put delete


  // Get all investments
  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Get investment by ID
  getInvestmentById(id: number): Observable<Investment> {
    return this.http.get<Investment>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));

  }

  // Add a new investment


  addInvestment(newInvestment: Investment): Observable<Investment> {
    newInvestment.id = this.generateNewId();
    return this.http.post<Investment>(this.apiUrl, newInvestment).pipe(catchError(this.handleError));


  }

  // Update an existing investment
  updateInvestment(updatedInvestment: Investment): Observable<Investment | undefined> {
    const url = `${this.apiUrl}/${updatedInvestment.id}`;
    return this.http.post<Investment>(url, updatedInvestment).pipe(catchError(this.handleError));

  }

  // Navigate to edit investment
  // editInvestment(id: number): void {
  //   this.router.navigate(['/modify-investment', id]);
  // }

  // Delete investment
  deleteInvestment(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number{
    return this.investments.length >0 ? Math.max(...this.investments.map(investment => investment.id)) +1 : 1;
  }

  private handleError(error: HttpErrorResponse){
    console.error('API error', error);
    return throwError(()=> new Error ('Server error, please try again'));
  }
}
