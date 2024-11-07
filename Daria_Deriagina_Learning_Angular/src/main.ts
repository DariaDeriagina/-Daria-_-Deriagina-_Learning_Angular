import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from './app/app.component';
import { InvestmentListComponent } from "./app/investment-list/investment-list.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";
import {InvestmentListItemComponent} from "./app/investment-list-item/investment-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {delay} from "rxjs";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes: Routes = [
  {path: '', redirectTo: '/w', pathMatch: 'full'},
  { path: 'investments', component: InvestmentListComponent },
  { path: 'investments/:id', component: InvestmentListItemComponent },
  {path: 'modify-investment', component: ModifyListItemComponent},
  { path: 'modify-investment/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay:1000}))],
}).catch((err)=>console.error(err));
