// this is a place to set a price that I'll be able to use everywhere a price is shown

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {}

  getAnnualPrice() {
    return 359.88;
  }

  getMonthlyPrice() {
    return 29.99;
  }

  getRegularPrice() {
    return 599.99;
  }
  
}
