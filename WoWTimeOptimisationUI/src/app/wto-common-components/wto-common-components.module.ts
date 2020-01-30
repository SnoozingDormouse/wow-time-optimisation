import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingIconComponent } from './rotating-icon/rotating-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
      RotatingIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    RotatingIconComponent
  ]
})
export class WtoCommonComponentsModule { }
