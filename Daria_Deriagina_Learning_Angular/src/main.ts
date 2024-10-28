import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { InvestmentListComponent } from './app/investment-list/investment-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { InvestmentListItemComponent } from './app/investment-list-item/investment-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/investment', pathMatch: 'full' }, // Default route
  { path: 'investment', component: InvestmentListComponent },
  { path: 'investment/:id', component: InvestmentListItemComponent }, // For viewing investment details
  { path: 'modify-investment', component: ModifyListItemComponent }, // For adding a new investment
  { path: 'modify-investment/:id', component: ModifyListItemComponent }, // For editing an existing investment
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful'));
