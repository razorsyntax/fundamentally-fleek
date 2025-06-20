import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../library/components/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../library/components/footer/footer.component';

@Component({
    selector: 'app-terms-and-conditions',
    imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
    templateUrl: './terms-and-conditions.component.html',
    styleUrls: ['./terms-and-conditions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsAndConditionsComponent {}
