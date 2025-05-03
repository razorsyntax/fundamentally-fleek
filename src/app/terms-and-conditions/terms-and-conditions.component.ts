import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../library/components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-terms-and-conditions',
    imports: [CommonModule, RouterLink, HeaderComponent],
    templateUrl: './terms-and-conditions.component.html',
    styleUrls: ['./terms-and-conditions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsAndConditionsComponent {}
