import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../library/components/header/header.component';
import { HeroSectionComponent } from '../library/components/hero-section/hero-section.component';
import { ProblemSectionComponent } from "../library/components/problem-section/problem-section.component";
import { FeaturesSectionComponent } from "../library/components/features-section/features-section.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, HeroSectionComponent, ProblemSectionComponent, FeaturesSectionComponent]
})
export class HomeComponent implements OnInit {
  pdfUrl = 'assets/documents/Fundamentally_v001_PitchPlan.pdf';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

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
