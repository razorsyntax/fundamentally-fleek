import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styleUrls: ['./problem-section.component.scss'],
  templateUrl: './problem-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemSectionComponent { }
