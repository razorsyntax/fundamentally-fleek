import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptimizedImageComponent } from '../../../shared/components/optimized-image/optimized-image.component';

@Component({
    selector: 'app-value-proposition',
    imports: [CommonModule, OptimizedImageComponent],
    templateUrl: './value-proposition.component.html',
    styleUrls: ['./value-proposition.component.scss']
})
export class ValuePropositionComponent {}
