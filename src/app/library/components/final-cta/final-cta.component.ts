import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from '../../services/utilities.service';
import { Router, RouterModule } from '@angular/router';
@Component({
    selector: 'app-final-cta',
    imports: [CommonModule, RouterModule],
    templateUrl: './final-cta.component.html',
    styleUrls: ['./final-cta.component.scss']
})
export class FinalCtaComponent {
  utilities = inject(UtilitiesService);
  price = this.utilities.getMonthlyPrice();
  router = inject(Router);

  navigateToPurchaseOptions() {
   this.router.navigate(['/purchase-options']);
  }
}
