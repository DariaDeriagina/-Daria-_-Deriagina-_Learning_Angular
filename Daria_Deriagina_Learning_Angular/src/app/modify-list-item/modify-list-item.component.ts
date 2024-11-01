import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss']
})
export class ModifyListItemComponent implements OnInit {
  investmentForm: FormGroup;
  investment: Investment | undefined;
  investments: Investment[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    // Initialize the form with fields and validators
    this.investmentForm = this.fb.group({
      id: [''],
      investmentName: [''],
      initialAmount: [0],
      interestRate: [0],
      duration: [0],
      compoundFrequency: [false]
    });
  }

  ngOnInit(): void {
    // Fetch all investments for potential unique validation
    this.investmentService.getInvestments().subscribe(investments => {
      this.investments = investments;
    });

    // Load specific investment if ID is in route
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.investmentService.getInvestmentById(+id).subscribe(investment => {
        if (investment) {
          this.investment = investment;
          this.investmentForm.patchValue(investment);  // Populate form with existing data
        }
      });
    }
  }

  // Check if ID and Name are unique
  isUniqueIdAndName(id: number, name: string): boolean {
    return !this.investments.some(investment =>
      (investment.id === id && (!this.investment || investment.id !== this.investment.id)) ||
      (investment.name === name && (!this.investment || investment.name !== this.investment.name))
    );
  }

  // Handle form submission
  onSubmit(): void {
    const formValues = this.investmentForm.value;

    // Check for unique ID and name
    if (!this.isUniqueIdAndName(formValues.id, formValues.name)) {
      alert("ID and Investment Name must be unique.");
      return;
    }

    if (this.investmentForm.valid) {
      const updatedInvestment = this.investmentForm.value;

      if (this.investment) {
        // Editing an existing investment
        this.investmentService.updateInvestment(updatedInvestment).subscribe(() => {
          this.router.navigate(['/investments']); // Redirect back to list after update
        });
      } else {
        // Adding a new investment
        this.investmentService.addInvestment(updatedInvestment).subscribe(() => {
          this.router.navigate(['/investments']); // Redirect back to list after addition
        });
      }
    } else {
      console.log("Form is invalid");
    }
  }


  // Delete investment
  onDelete(): void {
    if (this.investment) {
      this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
        this.router.navigate(['/investment']);
      });
    }
  }

  // Navigate back to the list
  navigateToInvestmentList(): void {
    this.router.navigate(['/investments']);
  }
}
