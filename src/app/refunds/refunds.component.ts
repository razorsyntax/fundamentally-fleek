import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../library/components/header/header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../library/components/footer/footer.component';

@Component({
    selector: 'app-refunds',
    imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
    templateUrl: './refunds.component.html',
    styleUrls: ['./refunds.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefundsComponent {}
