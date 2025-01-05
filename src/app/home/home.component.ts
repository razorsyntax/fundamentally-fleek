import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../library/components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { HeroComponent } from '../library/components/hero/hero.component';
import { ValuePropositionComponent } from '../library/components/value-proposition/value-proposition.component';
import { FeatureShowcaseComponent } from '../library/components/feature-showcase/feature-showcase.component';
import { VideoDemoComponent } from '../library/components/video-demo/video-demo.component';
import { PricingComponent } from '../library/components/pricing/pricing.component';
import { FinalCtaComponent } from '../library/components/final-cta/final-cta.component';
import { FooterComponent } from '../library/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    HeroComponent,
    ValuePropositionComponent,
    FeatureShowcaseComponent,
    VideoDemoComponent,
    PricingComponent,
    FinalCtaComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class HomeComponent implements OnInit {
  pdfUrl = 'assets/documents/Fundamentally_v001_PitchPlan.pdf';

  constructor() {}

  ngOnInit(): void {}

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'Fundamentally_v001_PitchPlan.pdf';
    link.click();
  }

  viewPdf() {
    window.open(this.pdfUrl, '_blank');
  }
}
