import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundsComponent } from './refunds/refunds.component';
import { PurchaseOptionsComponent } from './purchase-options/purchase-options.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'refunds', component: RefundsComponent },
  { path: 'purchase-options', component: PurchaseOptionsComponent },
  // { path: '**', component: PageNotFoundComponent },
];
