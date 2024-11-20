import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Investment } from "../models/investment";
import { InvestmentService } from "../services/investment.service";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective,
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.scss']
})
export class ModifyListItemComponent implements OnInit {
  investmentForm: FormGroup;
  investment: Investment | undefined;
  investments: Investment[] = [];
  error :string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    // Initialize the form without any validators
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
    // Fetch all investments
    // Load specific investment if ID is in the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.investmentService.getInvestmentById(id).subscribe({
        next: investment => {
          //console.log(investment.name);
          if (investment) {
            this.investmentForm.patchValue(investment);
          }
        },
        error: err => {
          this.error ='Error fetching investment';
          console.error('Error fetching investment', err)
        }
      });
    }
  }

  // Handle form submission
  onSubmit(): void {
   if (this.investmentForm.valid){
     const investment: Investment = this.investmentForm.value;
     console.log(investment.name)
     if (investment.id){
       this.investmentService.updateInvestment(investment).subscribe(()=>this.router.navigate(['/investments']));
     } else {
       investment.id = this.investmentService.generateNewId();
       console.log(investment.id);
       this.investmentService.addInvestment(investment).subscribe(()=>this.router.navigate(['/investments']));
     }
   }
  }

  // Delete investment
  // onDelete(): void {
  //   if (this.investment) {
  //     this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
  //       this.router.navigate(['/investments']);
  //     });
  //   }
  // }

  // Navigate back to the list
  navigateToInvestmentList(): void {
    this.router.navigate(['/investments']);
  }
}
