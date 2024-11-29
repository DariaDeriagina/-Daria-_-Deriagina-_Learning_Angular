import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";
import { HighlightOnFocusDirective } from "../directives/highlight-on-focus.directive";
import { ShowDetailsOnHoverDirective } from "../directives/show-details-on-hover.directive";
import { HoverHighlightDirective } from "../directives/hover-highlight.directive";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    ShowDetailsOnHoverDirective,
    HoverHighlightDirective,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss']
})
export class ModifyListItemComponent implements OnInit {
  investmentForm: FormGroup;
  investment: Investment | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    // Initialize the form with default values
    this.investmentForm = this.fb.group({
      id: [''],
      name: [''],
      initialAmount: [0],
      interestRate: [0],
      duration: [0],
      compoundFrequency: [false]
    });
  }

  ngOnInit(): void {
    // Load specific investment if ID exists in the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.investmentService.getInvestmentById(id).subscribe({
        next: (investment: Investment) => {
          if (investment) {
            this.investmentForm.patchValue(investment); // Populate the form
          }
        },
        error: (err) => {
          this.error = 'Error fetching investment.';
          console.error('Error fetching investment:', err);
        }
      });
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.investmentForm.valid) {
      const investment: Investment = this.investmentForm.value;

      // Update or add investment based on ID
      if (investment.id) {
        this.investmentService.updateInvestment(investment).subscribe({
          next: () => this.router.navigate(['/investments']),
          error: (err) => {
            this.error = 'Error updating investment.';
            console.error('Error updating investment:', err);
          }
        });
      } else {
        investment.id = this.investmentService.generateNewId();
        this.investmentService.addInvestment(investment).subscribe({
          next: () => this.router.navigate(['/investments']),
          error: (err) => {
            this.error = 'Error adding investment.';
            console.error('Error adding investment:', err);
          }
        });
      }
    }
  }

  // Navigate back to the list
  navigateToInvestmentList(): void {
    this.router.navigate(['/investments']);
  }
}
