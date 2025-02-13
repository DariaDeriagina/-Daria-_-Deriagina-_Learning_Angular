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
import {PreloadAllModules} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {path: '', redirectTo: '/w', pathMatch: 'full'},
  { path: 'investments', component: InvestmentListComponent },
  // { path: 'investments/:id', component: InvestmentListItemComponent },
  { path: 'investments/:id', loadChildren: () => import('./app/investment-list-item/investment-list-item.component').then(m => m.InvestmentListItemComponent) },
  {path: 'modify-investment', component: ModifyListItemComponent},
  { path: 'modify-investment/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay:1000})), provideAnimationsAsync()],
}).catch((err)=>console.error(err));
