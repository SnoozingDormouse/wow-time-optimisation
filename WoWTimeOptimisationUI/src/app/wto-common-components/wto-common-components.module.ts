import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingIconComponent } from './rotating-icon/rotating-icon.component';

@NgModule({
  declarations: [
      RotatingIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RotatingIconComponent
  ]
})
export class WtoCommonComponentsModule { }
