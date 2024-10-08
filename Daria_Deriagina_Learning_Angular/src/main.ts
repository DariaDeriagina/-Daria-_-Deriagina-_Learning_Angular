import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {InvestmentListComponent} from "./app/investment-list/investment-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo:'/investment', pathMatch: 'full'},//default route
  {path: 'investment', component: InvestmentListComponent},
  {path: 'modify-investment', component: ModifyListItemComponent },
  {path: '**', component:PageNotFoundComponent} //404 page **-wild card
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=> console.log('Bootstrap successful'));
