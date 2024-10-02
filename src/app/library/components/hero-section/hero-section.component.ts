import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent { }
