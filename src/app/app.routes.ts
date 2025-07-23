import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundsComponent } from './refunds/refunds.component';
import { PurchaseOptionsComponent } from './purchase-options/purchase-options.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'refunds', component: RefundsComponent },
  // { path: 'purchase-options', component: PurchaseOptionsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];
