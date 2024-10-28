import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss']
})
export class ModifyListItemComponent implements OnInit {
  investmentForm: FormGroup;
  investment: Investment | undefined;
  investments: Investment[] = []; // Store all investments for uniqueness check

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    // Initialize the form with required fields and validators
    this.investmentForm = this.fb.group({
      id: [
        '',
        [Validators.required, Validators.pattern("^[1-9][0-9]*$")] // ID must be a positive number
      ],
      investmentName: [
        '',
        [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")] // No special characters
      ],
      initialAmount: [
        0,
        [Validators.required, Validators.min(1)] // Minimum amount should be 1
      ],
      interestRate: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)] // Rate between 0 and 100
      ],
      duration: [
        0,
        [Validators.required, Validators.min(1)] // Duration should be at least 1 year
      ],
      compoundFrequency: [false]
    });
  }

  ngOnInit(): void {
    // Fetch all investments for unique validation
    this.investmentService.getInvestments().subscribe(investments => {
      this.investments = investments;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.investmentService.getInvestmentById(+id).subscribe(investment => {
        if (investment) {
          this.investment = investment;
          this.investmentForm.patchValue(investment); // Populate the form with the investment data
        }
      });
    }
  }

  // Check if ID and Name are unique
  isUniqueIdAndName(id: number, name: string): boolean {
    return !this.investments.some(investment =>
      (investment.id === id && (!this.investment || investment.id !== this.investment.id)) ||
      (investment.name === name && (!this.investment || investment.name !== this.investment.name)) // Updated to 'name'
    );
  }

  onSubmit(): void {
    const formValues = this.investmentForm.value;

    if (!this.isUniqueIdAndName(formValues.id, formValues.investmentName)) {
      alert("ID and Investment Name must be unique.");
      return;
    }

    if (this.investmentForm.valid) {
      const updatedInvestment = this.investmentForm.value;

      if (this.investment) {
        // Editing an existing investment
        this.investmentService.updateInvestment(updatedInvestment).subscribe(() => {
          this.router.navigate(['/investment']); // Redirect back to list after update
        });
      } else {
        // Adding a new investment
        this.investmentService.addInvestment(updatedInvestment).subscribe(() => {
          this.router.navigate(['/investment']); // Redirect back to list after addition
        });
      }
    } else {
      console.log("Form is invalid");
    }
  }

  onDelete(): void {
    if (this.investment) {
      this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
        this.router.navigate(['/investment']); // Redirect to list after deletion
      });
    }
  }

  navigateToInvestmentList(): void {
    this.router.navigate(['/investment']); // Navigate back to the investment list
  }
}
