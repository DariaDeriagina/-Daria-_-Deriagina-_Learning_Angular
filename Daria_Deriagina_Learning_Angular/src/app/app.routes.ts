import { Routes } from '@angular/router';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { ModifyInvestmentComponent } from './modify-list-item/modify-list-item.component';

export const routes: Routes = [
  { path: 'investment-list', component: InvestmentListComponent },
  { path: 'modify-investment/:id', component: ModifyInvestmentComponent },
  { path: 'modify-investment', component: ModifyInvestmentComponent }, //  creating a new investment
  { path: '', redirectTo: '/investment-list', pathMatch: 'full' } // deFault route
];
