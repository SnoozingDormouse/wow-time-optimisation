import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtoHomeComponent } from './wto-home.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [WtoHomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FontAwesomeModule,
  ]
})
export class WtoHomeModule { }
