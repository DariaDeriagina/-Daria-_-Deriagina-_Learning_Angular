import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {InvestmentListComponent} from "./app/investment-list/investment-list.component";

const routes: Routes = [
  {path:'', redirectTo:'/investment', pathMatch: 'full'},//default route
  {path: 'investment', component: InvestmentListComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=> console.log('Bootstrap successful'));
