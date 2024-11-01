import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from './app/app.component';
import { InvestmentListComponent } from "./app/investment-list/investment-list.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  { path: 'investments', component: InvestmentListComponent },
  { path: 'modify-investment/:id', component: ModifyListItemComponent }, // Edit route with ID
  { path: '**', component: PageNotFoundComponent } // Catch-all for 404
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
