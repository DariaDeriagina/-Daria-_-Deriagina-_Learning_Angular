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
  styleUrls: ['./modify-list-item.component.scss'] // Fixed the typo here
})
export class ModifyListItemComponent implements OnInit {
  investmentForm: FormGroup;
  investment: Investment | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    // Initialize the form with required fields
    this.investmentForm = this.fb.group({
      id: ['', Validators.required],  // ID is required
      investmentName: ['', Validators.required], // Investment name is required
      initialAmount: [0, Validators.required],   // Initial amount is required
      interestRate: [0, Validators.required],    // Interest rate is required
      duration: [0, Validators.required],        // Duration is required
      compoundFrequency: [false]                 // Checkbox for compound frequency
    });
  }

  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.investmentForm.valid) {
      const updatedInvestment = this.investmentForm.value;
      this.investmentService.updateInvestment(updatedInvestment).subscribe(() => {
        this.router.navigate(['/investment-list']); // Redirect to list after update
      });
    }
  }

  onDelete(): void {
    if (this.investment) {
      this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
        this.router.navigate(['/investment-list']); // Redirect to list after deletion
      });
    }
  }

  navigateToInvestmentList(): void {
    this.router.navigate(['/investment-list']); // Navigate back to the investment list
  }
}
