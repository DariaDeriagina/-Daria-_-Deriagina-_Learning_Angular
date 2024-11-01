import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from './app/app.component';
import { InvestmentListComponent } from "./app/investment-list/investment-list.component";
import { InvestmentListItemComponent } from "./app/investment-list-item/investment-list-item.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  { path: 'investments', component: InvestmentListComponent },
  { path: 'investments/:id', component: InvestmentListItemComponent },
  { path: 'modify-investment', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent } // Catch-all for 404
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
