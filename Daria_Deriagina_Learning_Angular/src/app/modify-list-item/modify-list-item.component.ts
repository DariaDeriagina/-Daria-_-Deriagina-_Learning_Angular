import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
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
    // Initialize the form without any validators
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
    // Fetch all investments
    this.investmentService.getInvestments().subscribe(investments => {
      this.investments = investments;
    });

    // Load specific investment if ID is in the route
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

  // Handle form submission
  onSubmit(): void {
    const updatedInvestment = this.investmentForm.value;

    if (updatedInvestment.id) {
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
  }

  // Delete investment
  onDelete(): void {
    if (this.investment) {
      this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
        this.router.navigate(['/investments']);
      });
    }
  }

  // Navigate back to the list
  navigateToInvestmentList(): void {
    this.router.navigate(['/investments']);
  }
}
