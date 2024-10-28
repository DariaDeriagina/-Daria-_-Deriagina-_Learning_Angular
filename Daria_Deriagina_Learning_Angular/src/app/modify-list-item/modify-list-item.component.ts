import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Investment} from "../models/investment";
import {InvestmentService} from "../services/investment.service";
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],

  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyInvestmentComponent {
  investmentForm: FormGroup;
  investment: Investment | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private router: Router
  ) {
    this.investmentForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.investmentService.getInvestmentById(+id).subscribe(investment => {
        if (investment) {
          this.investment = investment;
          this.investmentForm.patchValue(investment);
        }
      });
    }
  }


  updateInvestmentList() {

  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      const updatedInvestment = this.investmentForm.value;
      this.investmentService.updateInvestment(updatedInvestment).subscribe(() => {
        this.router.navigate(['/investment-list']); // Redirect to list after update
      });
    }
  }





  onDelete() {
    if (this.investment) {
      this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
        this.router.navigate(['/investment-list']); // Redirect to list after deletion
      });
    }
  }

navigateToInvestmentList():void{
//     this.route.navigate(['/investments']);
 }

}


export class ModifyListItemComponent {
}
