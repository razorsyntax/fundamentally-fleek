import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../library/components/header/header.component';
import { HeroSectionComponent } from '../library/components/hero-section/hero-section.component';
import { ProblemSectionComponent } from "../library/components/problem-section/problem-section.component";
import { FeaturesSectionComponent } from "../library/components/features-section/features-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, HeroSectionComponent, ProblemSectionComponent, FeaturesSectionComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
