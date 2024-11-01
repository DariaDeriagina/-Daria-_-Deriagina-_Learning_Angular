import { Routes } from '@angular/router';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'investments', component: InvestmentListComponent },
  { path: 'modify-investment/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent } // Fallback route for 404 page
];
